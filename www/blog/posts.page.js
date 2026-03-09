export const title = 'Blog'
export const showTime = false
export const layout = 'blog-index.vto'
export const tags = ['index']

export default function* ({ search, paginate }) {
  const blogPosts = search.pages('blog !index', 'date=desc');
  const paginateOptions = {
    size: 8,
    url: (n) => `/blog/${n}/`
  };

  for (const blogPost of paginate(blogPosts, paginateOptions)) {
    yield blogPost;
  }
}