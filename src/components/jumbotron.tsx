'use client';

import { useRef } from 'react';
import useIntersectionObserver from '@/utils/useIntersectionObserver'

import * as styles from "@/components/jumbotron.css";

const Jumbotron = () => {
    const titleRef = useRef(null);
    const [inView] = useIntersectionObserver(titleRef, {
        threshold: 0
    })

    return (
        <div ref={titleRef}
            className={styles.wrapper} >
            <TitleWrapper inView={inView}>
                <Crown inView={inView} />
                <h1 className={styles.heading}>SNAILBITES</h1>
            </TitleWrapper>
        </div>
    )
}


const Crown = ({ inView, style }: {
        inView?: boolean|undefined;
        style?: React.CSSProperties;
    }) => (
        <svg xmlns="http://www.w3.org/2000/svg"
            className={styles.crown}
            style={{
                transform: inView
                    ? `scale(0.5) rotate(32deg)`
                    : `scale(0.5) rotate(5deg) translate(-16px, -8px)`
            }}>
            <path
                d="M0 10.165L4.607 43h64.648L74 10.165 55.971 26.582 37 0 18.112 27.748z"
                fill="#D6E307"
                fillRule="evenodd"
            />
        </svg>
)

const TitleWrapper = ({ inView, children }: {
        inView?: boolean;
        children: React.ReactNode[]
    }) => {
        return (
            <div className={styles.titleWrapper}
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? `translate(0, 10vh)` : `transform: translate(10px, 10vh)`
                }}>
                {children}
            </div>
        )
}

export default Jumbotron
