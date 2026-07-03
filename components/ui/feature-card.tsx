import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm',
        'transition-colors hover:bg-card hover:border-border',
        'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
        className
      )}
    >
      <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-secondary p-2.5 text-secondary-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
