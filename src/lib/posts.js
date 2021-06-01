
// const getPost = async (basePost: BasePost): Promise<Post> => {
function getPost() {
  

  const {file, year, month, day} = basePost

  const contents = await readFile(file)

  const {data, content} = matter(contents)

  const post = {
    ...basePost,
    ...data,
    content
  } as Post

  post.date = new Date(`${year}-${month}-${day}`).toISOString()

  return post
}