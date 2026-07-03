import { cn } from '@/lib/utils'

export function FutureVision() {
  return (
    <section id="vision" className="py-20 sm:py-24 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          The flight recorder for AI agents.
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
          As AI systems become responsible for more production work, debugging
          and observability become critical. Halfhand records prompts, tool
          calls, MCP traffic, file modifications, terminal commands, and
          execution history so developers can replay failures, audit behavior,
          and understand exactly what happened.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              stat: '100%',
              label: 'Local-first',
              desc: 'Your data stays on your machine',
            },
            {
              stat: 'SQLite',
              label: 'Portable storage',
              desc: 'Query with SQL, backup with tools you know',
            },
            {
              stat: 'Replay',
              label: 'Deterministic',
              desc: 'Exact reproduction of every execution',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={cn(
                'rounded-xl border border-border/60 bg-card/50 p-6 text-center transition-colors hover:bg-card'
              )}
            >
              <div className="text-3xl font-bold tracking-tight text-foreground">
                {item.stat}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                {item.label}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
