import { cn } from '@/lib/utils'
import { Github, Terminal, Lock } from 'lucide-react'

export function OpenSource() {
  return (
    <section id="open-source" className="py-20 sm:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for developers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start locally. Integrate with existing workflows. Keep ownership
            of your execution history.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: <Terminal className="h-5 w-5" />,
              title: 'Start locally',
              description:
                'Install via cargo, run on your machine. No cloud account, no tokens, no API keys required.',
            },
            {
              icon: <Github className="h-5 w-5" />,
              title: 'Integrates with CI/CD',
              description:
                'Export sessions as artifacts. Replay failures in CI pipelines. Generate reports for PRs.',
            },
            {
              icon: <Lock className="h-5 w-5" />,
              title: 'Keep ownership',
              description:
                'Your execution data never leaves your machine. Full privacy and compliance from day one.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={cn(
                'rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:bg-card',
                'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background'
              )}
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-secondary p-2.5 text-secondary-foreground">
                {item.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/halfhandorg/halfhand"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors',
              'hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            )}
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
