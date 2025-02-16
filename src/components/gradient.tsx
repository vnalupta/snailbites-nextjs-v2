'use client';

import {useEffect, useRef, useState } from "react";
import useIntersectionObserver from "@/utils/useIntersectionObserver";

import * as styles from "@/components/gradient.css";

const Gradient = () => {
    const footerRef = useRef(null);
    const [visible, showCloud] = useState(false);

    const [inView] = useIntersectionObserver(footerRef, {
        threshold: 0
    })

    useEffect(() => {
        showCloud(true);
    }, [inView]);

    return (
        <section
            ref={footerRef}
            className={styles.container}>
            <svg viewBox="0 0 1440 380" xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'relative',
                    zIndex: 1
                }}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="duskMountain">
                        <stop stopColor="#8E99AC" />
                        <stop stopColor="#4F1C48" offset="100%" />
                    </linearGradient>
                </defs>

                <ellipse
                    className={styles.cloud1}
                    fill="#D8D8D8"
                    cx="171.5" cy="14.5" rx="203.5" ry="21.5">
                </ellipse>

                <ellipse
                    className={styles.cloud2}
                    fill="#D8D8D8"
                    cx="171.5" cy="14.5" rx="171.5" ry="14.5"
                    style={{
                        animation: visible
                            ? `4500ms moveHorizontal infinite alternate`
                            : `inherit`
                    }}>
                </ellipse>

                <ellipse
                    className={styles.cloud3}
                    fill="#D8D8D8"
                    cx="171.5" cy="14.5" rx="153.5" ry="11.5">
                </ellipse>

                <path d="M0 3041.525l558.176-162.19 256.6 162.19L1202.885 2784l302.113 319.999.002.001v66H0v-128.475z" transform="translate(0 -2784)" fill="url(#duskMountain)" fillRule="evenodd" opacity=".2" />
            </svg>
            <div
                className={styles.sun}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#D6E307" fillRule="evenodd" />
                </svg>
            </div>
        </section>
    )
}

export default Gradient