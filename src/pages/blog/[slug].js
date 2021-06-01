// import { bundleMDX } from 'mdx-bundler'
// import path from 'path'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { MDXProvider } from '@mdx-js/react'
// import { getPostBySlug } from '../../lib/mdx-helper'

import { bundleMDX } from 'mdx-bundler'
import path from 'path'
// import { useMemo } from 'react'
// import { getMDXComponent } from 'mdx-bundler/client'
// import { MDXProvider } from '@mdx-js/react'
import { getPostBySlug } from '../../lib/mdx-helper'
import MDX from '../../components/mdx'

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'demo' } }, { params: { slug: 'hello-world' } }],
    fallback: false, // See the "fallback" section below
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  const result = await bundleMDX(post, {
    cwd: path.join(process.cwd(), 'src/components/shared'),
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
  })

  const { code, frontmatter } = result

  return {
    props: {
      code,
      frontmatter,
    },
  }
}

export default function SingleBlogPage({ query, code }) {
  return (
    <main>
      <h1>Posts </h1>
      <MDX source={code} />
    </main>
  )
}
