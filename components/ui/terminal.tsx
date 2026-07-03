'use client'

import { cn } from '@/lib/utils'

interface TerminalProps {
  command?: string
  lines: string[]
  className?: string
  title?: string
}

export function Terminal({ command, lines, className, title = 'bash' }: TerminalProps) {
  const getLineColor = (line: string) => {
    if (line.includes('ERROR')) return 'text-red-400'
    if (line.includes('SUCCESS')) return 'text-emerald-400'
    if (line.includes('AGENT')) return 'text-amber-400'
    if (line.includes('TOOL')) return 'text-sky-400'
    if (line.includes('MCP')) return 'text-purple-400'
    if (line.includes('$ hh')) return 'text-muted-foreground'
    return 'text-foreground/90'
  }

  return (
    <div
      className={cn(
        'rounded-lg border border-border/80 bg-[#0d1117] overflow-hidden shadow-2xl',
        className
      )}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d]">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-[#8b949e] font-mono">{title}</span>
        </div>
      </div>

      {/* Terminal body */}
      <div className="px-4 py-4 font-mono text-sm leading-relaxed overflow-x-auto">
        {command && (
          <div className="text-muted-foreground mb-2">
            {command}
          </div>
        )}
        <div className="space-y-0.5">
          {lines.map((line, i) => (
            <div key={i} className={cn('whitespace-pre', getLineColor(line))}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function InlineCode({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-foreground',
        className
      )}
    >
      {children}
    </code>
  )
}
