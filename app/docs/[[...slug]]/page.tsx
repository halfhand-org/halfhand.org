import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDocContentBySlug, getAllDocSlugs } from '@/lib/docs'

interface PageProps {
  params: Promise<{ slug?: string[] }>
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const doc = getDocContentBySlug(slug || [])
  if (!doc) {
    return {}
  }
  const slugPath = slug && slug.length > 0 ? `${slug.join('/')}/` : ''
  return {
    title: `${doc.title} — Halfhand Docs`,
    description: `Read the documentation for ${doc.title} on Halfhand.`,
    alternates: {
      canonical: `https://halfhand.org/docs/${slugPath}`,
    },
  }
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const doc = getDocContentBySlug(slug || [])

  if (!doc) {
    notFound()
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: doc.html }}
    />
  )
}
