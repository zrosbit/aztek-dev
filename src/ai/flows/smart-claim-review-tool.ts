'use server';
/**
 * @fileOverview An AI-powered tool to review submitted claims for potential fraud or technical inconsistencies.
 *
 * - reviewClaim - A function that handles the claim review process.
 * - SmartClaimReviewInput - The input type for the reviewClaim function.
 * - SmartClaimReviewOutput - The return type for the reviewClaim function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartClaimReviewInputSchema = z.object({
  claimEvidence: z
    .string()
    .describe('Detailed description of the claim evidence, including customer statements and dates.'),
  installationPhotos: z
    .array(z.string())
    .describe(
      "An array of installation photos, each as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  historicalJobRecords: z
    .string()
    .describe(
      'Textual summary of historical job records or installer performance related to this claim or customer.'
    ),
});
export type SmartClaimReviewInput = z.infer<typeof SmartClaimReviewInputSchema>;

const SmartClaimReviewOutputSchema = z.object({
  hasIssues: z
    .boolean()
    .describe(
      'True if potential fraud or technical inconsistencies are detected, false otherwise.'
    ),
  issueType: z
    .enum(['None', 'Fraud', 'Technical Inconsistency', 'Other'])
    .describe(
      'The type of issue detected, if any. Can be None, Fraud, Technical Inconsistency, or Other.'
    ),
  explanation: z
    .string()
    .describe('A brief explanation of the detected issues or why no issues were found.'),
});
export type SmartClaimReviewOutput = z.infer<typeof SmartClaimReviewOutputSchema>;

export async function reviewClaim(input: SmartClaimReviewInput): Promise<SmartClaimReviewOutput> {
  return smartClaimReviewFlow(input);
}

const smartClaimReviewPrompt = ai.definePrompt({
  name: 'smartClaimReviewPrompt',
  input: {schema: SmartClaimReviewInputSchema},
  output: {schema: SmartClaimReviewOutputSchema},
  prompt: `You are an expert claims manager and fraud detection specialist for automotive, moto, and architectural protection products. Your task is to meticulously review submitted claims and identify any potential fraud or technical inconsistencies. You need to provide a clear explanation for your findings.

Here is the claim information:

Claim Evidence: {{{claimEvidence}}}

Historical Job Records: {{{historicalJobRecords}}}

Installation Photos: {{#each installationPhotos}}{{media url=this}}{{/each}}

Based on the provided information, analyze the claim and determine if there are any suspicious patterns, missing details, inconsistencies between evidence and photos, or deviations from standard installation practices that suggest fraud or technical issues.

Respond with a JSON object conforming to the SmartClaimReviewOutputSchema, providing whether issues were found, the type of issue, and a concise explanation.`,
});

const smartClaimReviewFlow = ai.defineFlow(
  {
    name: 'smartClaimReviewFlow',
    inputSchema: SmartClaimReviewInputSchema,
    outputSchema: SmartClaimReviewOutputSchema,
  },
  async input => {
    const mediaParts = input.installationPhotos.map(photoUri => ({media: {url: photoUri}}));

    const promptParts = [
      {text: `You are an expert claims manager and fraud detection specialist for automotive, moto, and architectural protection products. Your task is to meticulously review submitted claims and identify any potential fraud or technical inconsistencies. You need to provide a clear explanation for your findings.\n\nHere is the claim information:\n\nClaim Evidence: ${input.claimEvidence}\n\nHistorical Job Records: ${input.historicalJobRecords}\n\nInstallation Photos: `},
      ...mediaParts,
      {text: `\n\nBased on the provided information, analyze the claim and determine if there are any suspicious patterns, missing details, inconsistencies between evidence and photos, or deviations from standard installation practices that suggest fraud or technical issues.\n\nRespond with a JSON object conforming to the SmartClaimReviewOutputSchema, providing whether issues were found, the type of issue, and a concise explanation.`}
    ];

    const {output} = await ai.generate({
      model: ai.model('gemini-2.5-flash'), // Or an appropriate vision-capable model
      prompt: promptParts
    });
    
    // Parse the output to ensure it matches the schema
    const parsedOutput = JSON.parse(output.text() || '{}');
    return SmartClaimReviewOutputSchema.parse(parsedOutput);
  }
);
