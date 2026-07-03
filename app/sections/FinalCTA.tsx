import { Terminal } from '@/components/ui/terminal'
import { cn } from '@/lib/utils'

export function FinalCTA() {
  return (
    <section
      id="install"
      className="py-20 sm:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Stop guessing why your agents failed.
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Replay every action. Inspect every decision. Built for the
          engineers shipping AI systems.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="#hero"
            className={cn(
              'inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors',
              'hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            )}
          >
            Install Halfhand
          </a>

          <div className="w-full max-w-lg">
            <Terminal
              title="bash"
              command="$ cargo install halfhand"
              lines={[
                '',
                '    Updating crates.io index',
                '   Downloading halfhand v0.1.0',
                '    Compiling halfhand v0.1.0',
                '     Finished release [optimized] target(s) in 14.2s',
                '  Installing ~/.cargo/bin/halfhand',
                '   Installed halfhand v0.1.0',
                '',
                '$ hh --version',
                'halfhand 0.1.0',
              ]}
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Requires Rust 1.75+ &middot; macOS, Linux, Windows supported
        </p>
      </div>
    </section>
  )
}
