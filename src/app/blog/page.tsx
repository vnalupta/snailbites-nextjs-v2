import React from "react"
import BlogList from '@components/bloglist'
import matter from "gray-matter";

export default function Blog ({ blogs, title, description, ...props }) {
    return (
        // <main role="main" style={{ width: ['100%', '100%', '768px'], variant: 'styles.layout' }}>
        <main>
                <section style={{ marginTop: '100px'}}>
                    <h1>Blogs</h1>
                    <BlogList blogs={blogs} showDots />      
                </section>              
        </main>
    )
}

export async function getStaticProps() {
    const configData = await import(`../../../siteconfig.json`)
  
    const blogs = ((context) => {
      const keys = context.keys()
      const values = keys.map(context)
  
      const data = keys.map((key, index) => {
        let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
        const value = values[index]
        // @ts-expect-error
        const document = matter(value.default)                
        return {
          frontmatter: document.data,
          markdownBody: document.content,
          slug,
        }
      })
      return data.reverse()
    })(require.context('../../../blogs', true, /\.md$/))
  
    return {
      props: {
        blogs,
        title: configData.default.title,
        description: configData.default.description,
      },
    }
  }
