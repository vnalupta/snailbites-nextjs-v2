'use client';
import { useRef } from "react";

import styles from './bio.module.scss'
import profile from '/public/profile.png'

import Button from "./button";
import Image from "next/image";
import Link from "next/link";

import useIntersectionObserver from '@/utils/useIntersectionObserver'

const Bio = () => {
    const bioRef = useRef(null);
    const [inView] = useIntersectionObserver(bioRef, {
        threshold: 0.3,
    });

    return (
        <section className={styles.container}>
            <div className={`${styles.column} ${styles.lhs}`}>
                <div className={styles.bioWrapper}>
                    <BioBg />
                </div>

                <Image
                    src={profile}
                    alt="Vincent Nalupta's shadow against some subway tiles."
                    width={240}
                    height={320}
                    style={{
                        position: `relative`,
                        zIndex: 10                        
                    }}
                />
            </div>
            <Profile inView={inView}>
                {/* fix heading variant */}
                <h2 ref={bioRef} style={{ marginBottom: "10px" }}>
                    HELLO!
                </h2>
                <p>
                    My name is Vincent Nalupta and I am an Engineering
                    Manager.
                </p>
                <p>
                    I&apos;ve won some{" "}
                    <Link
                        href="https://www.commarts.com/webpicks/timothy-goodman"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        awards
                    </Link>{" "}
                    for my work and some{" "}
                    <Link
                        href="https://twitter.com/snailbites/status/917875803983147008"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        giant pencils
                    </Link>{" "}
                    for my{" "}
                    <Link
                        href="https://cssdevconf2016.sched.com/vnalupta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        talks
                    </Link>
                    .
                </p>
                <p style={{ marginBottom: "30px"}}>
                    This is my space to flex my design chops and write about
                    interesting tech.
                </p>

                <Link href="/blog">
                    {/* Fix responsive */}
                    <Button>Read the Blog</Button>
                </Link>
            </Profile>
        </section>
    );
}

const Profile = ({ inView, children }: {
    inView?: boolean;
    children?: React.ReactNode[]
}) => {
    return(
    <div className={`${styles.column} ${styles.rhs}`}
        style={{
            transform: inView ? `translateX(0)` : `initial`,            
            opacity: inView ? 1 : 0
        }}>
        {children}
    </div>
    )
}

const BioBg = () => (
    <svg viewBox="0 0 435 490" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient
                id="bioCircle"
                x1="65.77%"
                y1="68.9%"
                x2="14.777%"
                y2="7.605%"
            >
                <stop stopColor="#3C4186" offset="0%" />
                <stop stopColor="#4F1C48" offset="100%" />
            </linearGradient>
            <linearGradient
                id="bioRect"
                x1="22.991%"
                y1="0%"
                x2="50%"
                y2="83.112%"
            >
                <stop stopColor="#D6E307" offset="0%" />
                <stop stopColor="#125458" offset="100%" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <circle fill="url(#bioCircle)" cx="180" cy="180" r="180" />
            <rect
                fill="url(#bioRect)"
                x="147"
                y="111"
                width="269"
                height="366"
                rx="6"
            />
        </g>
    </svg>
);

export default Bio;
