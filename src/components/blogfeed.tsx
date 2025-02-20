import Link from "next/link";
import * as styles from "@/components/blogfeed.css";
import { getMetadata } from "@/utils/getMetadata";


// @ts-ignore
const BlogFeed = ({
    showHeading,
}: {
    showHeading: boolean;
}) => {
    const metadata = getMetadata();

    return (
        <>
            {showHeading ? (<h4>Read more</h4>) : undefined}
            <ul className={styles.links}>
                {metadata?.map((item, i) => (
                    <li key={i}>
                        {/* @ts-ignore */}
                        <Link href={`/blog/${item.path}`}>
                            {/* @ts-ignore */}
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BlogFeed;
