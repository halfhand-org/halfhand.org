import { EyeOff, Layers, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

const problems = [
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: 'Black Box Execution',
    description:
      'Most agent frameworks expose logs, not reasoning. You see what happened, not why it happened.',
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Missing Context',
    description:
      'Tool calls, MCP requests, prompts, and file changes are scattered across systems. No single source of truth.',
  },
  {
    icon: <RotateCcw className="h-5 w-5" />,
    title: 'No Reproducibility',
    description:
      'Failures are difficult to replay and investigate later. Context is lost the moment the process exits.',
  },
]

export function Problem() {
  return (
    <section id="problem" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI agents fail. Understanding why is hard.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={cn(
                'group rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:bg-card',
                'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background'
              )}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-destructive/10 p-2.5 text-destructive">
                {problem.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
