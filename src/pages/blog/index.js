import SinglePostPreview from '../../components/SinglePostPreview'
import { getAllPosts } from '../../lib/mdx-helper'

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default function BlogPage({ posts }) {
  return (
    <main>
      <h1>Posts</h1>
      {posts.map((post) => (
        <SinglePostPreview key={post.slug} post={post} />
      ))}
    </main>
  )
}
