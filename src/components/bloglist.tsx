import Link from 'next/link'
type BlogListProps = {
  blogs: any;
  showDots?: boolean;
}
function BlogList({ blogs, showDots = false }: BlogListProps ) {
  if (blogs === 'undefined') return null

  return (
    <div>
      {!blogs && <div>No blogs!</div>}
      <ul style={{
        listStyleType: `${showDots ? '' : 'none'}`,
        padding: `${showDots ? 'revert' : 0}`
      }}>
        {blogs &&
          blogs.map((blog) => {
            return (
              <li key={blog.slug}>
                <Link href={{ pathname: `/blog/${blog.slug}` }}>
                  {blog.frontmatter.title}
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default BlogList