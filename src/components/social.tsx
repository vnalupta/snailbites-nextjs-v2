import React, { FC } from "react"

import styles from "./social.module.scss"
import Color from "@/styles/color.module.scss"

import { usePathname } from 'next/navigation';

import Link from "next/link";

const rootPath = `/`
const blogPath = `/blog/`

function Social() {
    const pathname = usePathname();

    return (
        <div
            className={styles.container}
            style={{
                backgroundColor: pathname === "/"
                ? Color.plum
                : Color.sesame
            }}
        >
            <p className={styles.heading}>What&apos;s good?</p>
            <ul className={styles.list}>
                <li><a href="https://twitter.com/snailbites">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/vnalupta/">LinkedIn</a></li>
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
