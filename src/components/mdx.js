import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

export default function MDX({ source }) {
  const Component = useMemo(() => getMDXComponent(source), [source])

  return <Component components />
}
