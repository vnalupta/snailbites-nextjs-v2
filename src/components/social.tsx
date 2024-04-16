import styles from "./social.module.scss"
import Link from "next/link";

const rootPath = `/`
const blogPath = `/blog/`

function Social() {
    return (
        <div className={styles.container}>
            <p className={styles.heading}>What&apos;s good?</p>
            <ul className={styles.list}>
                <li><a href="https://twitter.com/snailbites">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/vnalupta/">LinkedIn</a></li>
                <li><a href="https://github.com/vnalupta/snailbites-nextjs-v2">Github</a></li>
            </ul>
            <ul className={styles.list}>
                <li>
                    <Link href={rootPath}>Home</Link>
                </li>
                <li>
                    <Link href={blogPath}>Blog</Link>
                </li>
            </ul>
        </div>
    )
}

export default Social
