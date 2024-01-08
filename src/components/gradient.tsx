import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

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
        <section ref={footerRef} style={{
            position: 'relative',
            height: '30vh',
            // background: 'rgb(48, 74, 129)',
            background: `linear-gradient(
                180deg, 
                rgba(48, 74, 129, 1) 0%, 
                rgba(79, 28, 72, 1) 100%)
            `
        }}>
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
                    style={{
                        transform: 'translate(35vw, 16vh)',
                        opacity: .1
                    }}
                    fill="#D8D8D8"
                    cx="171.5" cy="14.5" rx="203.5" ry="21.5">
                </ellipse>

                <Cloud
                    inView={visible}
                    fill="#D8D8D8"
                    cx="171.5" cy="14.5" rx="171.5" ry="14.5">
                </Cloud>

                <ellipse
                    style={{
                        transform: 'translate(74vw, 23vh)',
                        opacity: .1
                    }}
                    fill="#D8D8D8"
                    cx="171.5" cy="14.5" rx="153.5" ry="11.5">
                </ellipse>

                <path d="M0 3041.525l558.176-162.19 256.6 162.19L1202.885 2784l302.113 319.999.002.001v66H0v-128.475z" transform="translate(0 -2784)" fill="url(#duskMountain)" fillRule="evenodd" opacity=".2" />
            </svg>
            <div style={{
                width: '18vh',
                position: 'absolute',
                right: '12vh',
                top: '-9vh',
                opacity: 0.85,
            }}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#D6E307" fillRule="evenodd" />
                </svg>
            </div>
        </section>
    )
}

// const StyledMoon = styled.div`
//     width: 18vh;
//     position: absolute;
//     right: 12vh;
//     top: -9vh;
//     opacity: 0.85;
// `

const Cloud: FunctionComponent<{
    inView: boolean,
    fill?: string,
    cx: string;
    cy: string;
    rx: string;
    ry: string;
}> = ({ inView }) => {
    let base = {
        opacity: .25,
        transform: 'translate(1vw, 20vh)'
    }

    const styles = {
        ...base,
        ...(inView && { animation: '4500ms moveHorizontal infinite alternate' })
    }

    return (
        <ellipse style={styles} />        
    )
}
//     opacity: .25;
//     transform: translate(1vw, 20vh);     

//     ${props => props.visible && `
//         animation: 4500ms moveHorizontal infinite alternate;    
//     `}

//     @keyframes moveHorizontal {
//         from { 
//             transform: translate(10vw, 22vh);
//         }
//         to {
//             transform: translate(15vw, 22vh);
//         }
//     }
// `

// const StyledGradient = styled.section`
//     position: relative;
//     height: 30vh;
//     background: rgb(48, 74, 129);
//     background: linear-gradient(
//         180deg,
//         rgba(48, 74, 129, 1) 0%,
//         rgba(79, 28, 72, 1) 100%
//     );
// `

export default Gradient