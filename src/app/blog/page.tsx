/* eslint-disable @next/next/no-async-client-component */
import Navigation from "@/components/navigation";
import styles from "./blog.module.scss";

import { getMetadata } from "@/utils/getMetadata";
import { getPost } from "@/utils/getPost";

import Mountains from "@/components/mountains";
import Gradient from "@/components/gradient";
import Footer from "@/components/footer";

export default async function Blog() {
    const metadata = getMetadata();
    const post = await getPost();

    return (
        <>
            <header>
                <Navigation />
                <Mountains />
            </header>
            <main>
                <div className={styles.wrapper}>
                    <section className={styles.post}>
                        <h1>{post.title}</h1>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.contentHtml,
                            }}
                        />
                    </section>
                    <aside className={styles.sidebar}>
                        <h5>Read more</h5>
                        <ul className={styles.links}>
                            {metadata?.map((item, i) => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ul>
                    </aside>
                </div>
                <Gradient />
                <Footer />
            </main>
        </>
    );
}

// {blogs &&
//   blogs.map((blog) => {
//     return (
//       <li key={blog.slug}>
//         <Link href={{ pathname: `/blog/${blog.slug}` }}>
//           {blog.frontmatter.title}
//         </Link>
//       </li>
//     )
//   })}
