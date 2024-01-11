'use client';

import styles from "./navigation.module.scss";

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";


const rootPath = `/`
const blogPath = `/blog`

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (event?: React.MouseEvent<HTMLAnchorElement>, destination?: string) => {
        setOpen(!open);

        if (!destination) {
            return;
        }

        // handle the work use case
        event.preventDefault();
        if (pathname.includes(blogPath)) {
            router.push('/#work', { scroll: true });
        }
        setTimeout(() => {
            const workEl = document.getElementById('work');
            workEl?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 350);
    }

    return (
        <nav className={styles.container} style={{ zIndex: open ? 1000 : 20 }}>
            <div
                className={`${styles.navButton} ${open ? styles.open : ``}`}
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
                    <Link href={rootPath} onClick={(e) => handleClick(e)}>
                        Home
                    </Link>
                </li>
                <li className="h1">
                    <Link href={`${rootPath}#work`} onClick={(e) => handleClick(e, 'work')}>
                        Work
                    </Link>
                </li>
                <li className="h1">
                    <Link href={blogPath} onClick={(e) => handleClick(e)}>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navigation
