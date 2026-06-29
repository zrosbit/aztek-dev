"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, TrendingUp, Boxes, Info, BarChart3 } from "lucide-react"
import { forecastOperationalAnalytics, type OperationalAnalyticsForecastOutput } from "@/ai/flows/operational-analytics-forecasting"

export default function ForecastingPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<OperationalAnalyticsForecastOutput | null>(null)

  const mockInput = {
    regionalSalesData: [
      { region: "North America", productCategory: "Automotive PPF", salesVolume: 1200, period: "Q3 2024" },
      { region: "Europe", productCategory: "Architectural", salesVolume: 850, period: "Q3 2024" }
    ],
    partnerPerformanceData: [
      { partnerName: "Elite Wraps", region: "North America", salesVolume: 400, customerSatisfactionScore: 98, onTimeDeliveryRate: 99 },
      { partnerName: "Euro Protect", region: "Europe", salesVolume: 300, customerSatisfactionScore: 92, onTimeDeliveryRate: 88 }
    ],
    additionalContext: "Anticipating high architectural demand due to new commercial construction projects in Berlin."
  }

  async function handleForecast() {
    setLoading(true)
    try {
      const response = await forecastOperationalAnalytics(mockInput)
      setResult(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-headline font-bold tracking-tight">Operational Intelligence</h1>
        <p className="text-muted-foreground">AI-driven demand forecasting and inventory optimization for the Aztek network.</p>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleForecast} disabled={loading} size="lg" className="shadow-lg shadow-primary/20">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <TrendingUp className="mr-2 h-4 w-4" />}
          Generate Q4 Forecast
        </Button>
      </div>

      {result ? (
        <div className="grid grid-cols-1 gap-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                <CardTitle>Executive Summary</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-foreground/90">{result.overallSummary}</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {result.forecasts.map((forecast, i) => (
              <Card key={i} className="bg-card border-white/5">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {forecast.region}
                    </Badge>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {forecast.productCategory}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase">
                        <TrendingUp className="w-3 h-3" />
                        Predicted Demand
                      </div>
                      <p className="text-2xl font-headline font-bold">{forecast.predictedDemand} <span className="text-xs font-normal text-muted-foreground">units</span></p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase">
                        <Boxes className="w-3 h-3" />
                        Optimal Inventory
                      </div>
                      <p className="text-2xl font-headline font-bold text-primary">{forecast.optimalInventoryLevel} <span className="text-xs font-normal text-muted-foreground">units</span></p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Forecasting Reasoning</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{forecast.reasoning}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Card className="bg-card border-white/5 p-12 text-center">
          <CardContent className="space-y-4">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
              <BarChart3 className="w-8 h-8 opacity-20" />
            </div>
            <h3 className="text-xl font-headline font-bold">Predictive Engines Standby</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Run the forecasting tool to analyze regional partner performance and historical sales trends for the upcoming quarter.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
