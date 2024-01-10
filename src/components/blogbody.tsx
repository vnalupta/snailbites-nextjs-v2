import Link from "next/link";
import styles from "./blogbody.module.scss";
import BlogFeed from "./blogfeed";

// @ts-ignore
const BlogBody = ({ metadata, post }) => {
    return (
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
                <BlogFeed showHeading={true} />
            </aside>
        </div>
    );
};

export default BlogBody;
