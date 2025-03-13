import { React } from "react"

export function ChartContainer({
  config,
  children,
  className,
}) {
  return (
    <div className={className}>
      <style>
        {Object.entries(config).map(
          ([key, value]) => `
            :root {
              --color-${key}: ${value.color};
            }
          `
        )}
      </style>
      {children}
    </div>
  )
}

export function ChartTooltip({ children }) {
  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      {children}
    </div>
  )
}

export function ChartTooltipContent({ hideLabel = false }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[0.70rem] uppercase text-muted-foreground">
        {hideLabel ? "" : "Label"}
      </span>
      <span className="font-bold">Value</span>
    </div>
  )
}

// Removed TypeScript types and kept the configuration as a simple object
export const ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))"
  }
} 