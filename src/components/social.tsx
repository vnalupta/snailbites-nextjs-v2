import * as styles from "@/components/social.css";
import Link from "next/link";

const rootPath = `/`
const blogPath = `/blog/`

function Social() {
    return (
        <div className={styles.container}>
            <p className={styles.heading}>What&apos;s good?</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <a href="https://twitter.com/snailbites">Twitter</a>
                </li>
                <li className={styles.listItem}>
                    <a href="https://www.linkedin.com/in/vnalupta/">LinkedIn</a>
                </li>
                <li className={styles.listItem}>
                    <a href="https://github.com/vnalupta/snailbites-nextjs-v2">Github</a>
                </li>
            </ul>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href={rootPath}>Home</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href={blogPath}>Blog</Link>
                </li>
            </ul>
        </div>
    )
}

export default Social
