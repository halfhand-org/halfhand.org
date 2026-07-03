import { FeatureCard } from '@/components/ui/feature-card'
import {
  RotateCcw,
  GitCommitVertical,
  Eye,
  FileDiff,
  ShieldCheck,
  Fingerprint,
  Database,
  TerminalSquare,
} from 'lucide-react'

const features = [
  {
    icon: <RotateCcw className="h-5 w-5" />,
    title: 'Deterministic Replay',
    description:
      'Replay historical executions with full context. Every prompt, tool call, and state change is preserved so you can step through failures exactly as they happened.',
  },
  {
    icon: <GitCommitVertical className="h-5 w-5" />,
    title: 'Execution Timeline',
    description:
      'View agent decisions chronologically. Navigate through events with millisecond precision to understand the exact sequence of actions.',
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: 'MCP Visibility',
    description:
      'Inspect Model Context Protocol requests and responses. See exactly what data was exchanged between your agent and external systems.',
  },
  {
    icon: <FileDiff className="h-5 w-5" />,
    title: 'File Diff Inspection',
    description:
      'See exactly what changed. Unified diffs show every file modification your agent made, with before and after context.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Agent Audit Trail',
    description:
      'Maintain historical execution records. Build trust in autonomous systems with complete, queryable logs of every decision.',
  },
  {
    icon: <Fingerprint className="h-5 w-5" />,
    title: 'Local-First',
    description:
      'Data remains under your control. All execution history is stored locally, never uploaded to external servers.',
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: 'SQLite Storage',
    description:
      'Portable, queryable execution history. Use SQL to analyze agent behavior patterns across thousands of runs.',
  },
  {
    icon: <TerminalSquare className="h-5 w-5" />,
    title: 'Terminal Native',
    description:
      'Built for developers who live in the terminal. Keyboard shortcuts, vim-like navigation, and zero GUI overhead.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to debug agents
          </h2>
          <p className="mt-4 text-muted-foreground">
            Purpose-built observability for autonomous systems.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
