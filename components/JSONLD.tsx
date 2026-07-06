export function JSONLD() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Halfhand',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Linux, macOS, Windows',
    softwareVersion: '0.1.0',
    url: 'https://halfhand.org',
    description:
      'Halfhand is a local-first developer tool for recording, replaying, and debugging AI agent execution. Inspect prompts, tool calls, MCP traffic, file modifications, and execution history through a deterministic replay interface.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Halfhand',
      url: 'https://halfhand.org',
    },
    featureList: [
      'AI agent observability',
      'Deterministic agent execution replay',
      'MCP debugging',
      'Agent tracing',
      'Execution timeline visualization',
      'File diff inspection',
      'SQLite storage',
      'Local-first data ownership',
    ],
    keywords: [
      'AI agent observability',
      'AI agent debugging',
      'agent execution replay',
      'deterministic agent execution',
      'agent tracing',
      'MCP debugging',
      'AI workflow observability',
      'AI agent audit trail',
      'AI agent monitoring',
      'agent forensics',
      'replay AI agent sessions',
      'Model Context Protocol debugging',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
