import BlogFeed from "./blogfeed";
import * as styles from "@/components/blogbody.css";

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
            <aside>
                <BlogFeed showHeading={true} />
            </aside>
        </div>
    );
};

export default BlogBody;
