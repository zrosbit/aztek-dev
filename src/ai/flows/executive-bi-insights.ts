'use server';
/**
 * @fileOverview B15 Executive BI Anomaly Detection and Insights.
 * 
 * This flow analyzes network-wide performance data to detect anomalies,
 * predict partner churn, and surface strategic growth opportunities.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const BIInsightInputSchema = z.object({
  partnerPerformance: z.array(z.object({
    partnerId: z.string(),
    partnerName: z.string(),
    revenueMTD: z.number(),
    claimRate: z.number(),
    leadConversionRate: z.number(),
    activeJobs: z.number(),
    lastActivityDays: z.number(),
  })),
  regionalData: z.array(z.object({
    region: z.string(),
    revenueGrowth: z.number(),
    topProduct: z.string(),
  })),
});

export type BIInsightInput = z.infer<typeof BIInsightInputSchema>;

const BIInsightOutputSchema = z.object({
  anomalies: z.array(z.object({
    type: z.enum(['Partner Outlier', 'Product Drop', 'Quality Risk']),
    subject: z.string(),
    severity: z.enum(['Low', 'Medium', 'Critical']),
    description: z.string(),
    recommendation: z.string(),
  })),
  predictions: z.array(z.object({
    type: z.enum(['Churn Risk', 'Expansion Opportunity']),
    subject: z.string(),
    probability: z.number().min(0).max(100),
    reasoning: z.string(),
  })),
  summary: z.string(),
});

export type BIInsightOutput = z.infer<typeof BIInsightOutputSchema>;

export async function generateExecutiveInsights(input: BIInsightInput): Promise<BIInsightOutput> {
  return executiveBIInsightsFlow(input);
}

const biPrompt = ai.definePrompt({
  name: 'executiveBIPrompt',
  input: { schema: BIInsightInputSchema },
  output: { schema: BIInsightOutputSchema },
  prompt: `You are the AZTEK Executive Strategy Agent. Analyze the following operational data:

Partner Performance:
{{#each partnerPerformance}}
- {{{partnerName}}}: Rev ₹{{{revenueMTD}}}, Claims {{{claimRate}}}%, Conv {{{leadConversionRate}}}%, Last Active {{{lastActivityDays}}} days ago.
{{/each}}

Regional Data:
{{#each regionalData}}
- {{{region}}}: Growth {{{revenueGrowth}}}%, Top Product: {{{topProduct}}}.
{{/each}}

Identify statistical outliers (e.g., claim rates 3x average), predict partners at risk of churning based on declining activity, and identify high-growth regions ready for expansion. Provide clear, actionable recommendations for AZTEK leadership.`,
});

const executiveBIInsightsFlow = ai.defineFlow(
  {
    name: 'executiveBIInsightsFlow',
    inputSchema: BIInsightInputSchema,
    outputSchema: BIInsightOutputSchema,
  },
  async (input) => {
    const { output } = await biPrompt(input);
    return output!;
  }
);
