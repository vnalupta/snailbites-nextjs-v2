import matter from "gray-matter";
import Markdown from "react-markdown";

export default function BlogPost({ frontmatter, markdownBody }) {
    if (!frontmatter) return (<></>)

    const { title, author, date } = frontmatter;

    return (
            // <main role="main" style={{ width: ['100%', '100%', '768px'], variant: 'styles.layout' }}>
            // figure out responsiveness
            <main>
                <section style={{ marginTop: '100px'}}>
                    <h1 style={{
                        margin: '0 0 25px 0'
                    }}>
                        {title}
                    </h1>

                    <Markdown>{markdownBody}</Markdown>

                    <p style={{ textAlign: 'left' }}>
                        {date}
                    </p>
                    
                </section>
            </main>
    )
}

/**
 * Source: 
 * https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/#
 */

export async function getStaticProps({ ...ctx }) {
    const { blog } = ctx.params;

    const content = await import(`../../../blogs/${blog}/${blog}.md`);
    const config = await import(`../../../siteconfig.json`);
    const data = matter(content.default);

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content
        }
    }
}

export async function getStaticPaths() {
    const blogSlugs = (context => {
        const keys = context.keys();
        const data = keys.map((key, index) => {
            return key.replace(/^.*[\\\/]/, '').slice(0, -3)
        })

        return data;
    })(require.context('../../../blogs', true, /\.md$/))

    const paths = blogSlugs.map((slug) => `/blog/${slug}`)

    return {
        paths,
        fallback: false,
    }
}