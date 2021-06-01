import Link from 'next/link'

export default function SinglePostPreview({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <Link href={`/blog/${post.slug}`}>Post link</Link>
    </div>
  )
}
