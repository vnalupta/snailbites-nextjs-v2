import Link from "next/link";
import styles from "./blogfeed.module.scss";
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
            {showHeading ? (<h4 className={styles.heading}>Read more</h4>) : undefined}
            <ul className={styles.links}>
                {metadata?.map((item, i) => (
                    <li className={styles.item} key={i}>

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
