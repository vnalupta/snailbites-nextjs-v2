'use client';

import { useState } from "react"
import { usePathname } from "next/navigation";

import styles from "./navigation.module.scss";

import Link from "next/link";

const rootPath = `/`
const blogPath = `/blog/`
const cvPath = `/cv/`

function Navigation() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname()

    // function scrollHandler(target) {
    //     if (!target) {
    //         return;
    //     }

        // see if you stil need any of this

        // if (target === 'work') {
        //     setTimeout(() => {
        //         // convert to Ref
        //         const height = document.getElementById('work').offsetTop || 1600;
        //         window.scrollTo({ top: height - 100, behavior: 'smooth' })
        //     }, 600);
        // }

        // if (target === 'home') {
        //     setTimeout(() => {
        //         window.scrollTo({ top: 0, behavior: 'smooth' })
        //     }, 600);
        // }
    // }

    const handleClick = (target?: EventTarget) => {
        setOpen(!open);

        // // TODO: get location from target
        // if (pathname === rootPath && !!target) {
        //     scrollHandler(target);
        // }
    }

    return (
        <nav className={styles.container} style={{ zIndex: open ? 1000 : 20 }}>
            <div
                className={open ? `${styles.navIsOpen} ${styles.navButton}` : `${styles.navButton}`}
                aria-label="navigation"
                onClick={e => handleClick()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div
                className={styles.backdrop}
                style={{ transform: open
                    ? `translate3d(0, 0, 0)`
                    : `translate3d(-100vw, 0, 0)`
                }}
            />

            <ul className={`${styles.list} ${open ? `${styles.open}` : ``}`}>
                <li className="h1">
                    <Link href={rootPath} onClick={e => handleClick()}>
                        Home
                    </Link>
                </li>
                <li className="h1">
                    <Link href={rootPath} onClick={e => handleClick()}>
                        Work
                    </Link>
                </li>
                <li className="h1">
                    <Link href={blogPath} onClick={e => handleClick()}>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


    export default Navigation
