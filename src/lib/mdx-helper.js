import fs, { readdir, readdirSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'

const { readFile } = fs.promises
const POSTS_DIRECTORY = path.join(process.cwd(), 'src/posts/')

async function getPostBySlug(slug) {
  const post = await readFile(
    path.join(POSTS_DIRECTORY, `/${slug}.mdx`),
    'utf8'
  )
  return post
}

async function getPost(slug) {
  const contents = await readFile(
    path.join(POSTS_DIRECTORY, `/${slug}.mdx`),
    'utf8'
  )
  const { data, content } = matter(contents)

  const post = { ...data, slug, content }

  return post
}

function fileSlugify(filename) {
  const [name, ext] = filename.split('.')
  return name
}

async function getPostFiles() {
  const files = await readdirSync(POSTS_DIRECTORY, 'utf8')
  return files.map((filename) => ({
    slug: fileSlugify(filename),
    file: path.join(POSTS_DIRECTORY, filename),
  }))
}

async function getAllPosts() {
  const postFiles = await getPostFiles()
  const posts = await Promise.all(
    postFiles.map(async (post) => getPost(post.slug))
  )
  return posts
}

export { getPostBySlug, getAllPosts }
