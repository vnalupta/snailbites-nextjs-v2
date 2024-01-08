import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

function Bio() {
    const bioRef = useRef(null);
    const [inView] = useIntersectionObserver(bioRef, {
        threshold: 0.3,
    });

    return (
        <BioContainer>
            <BioColumn>
                <BioWrapper>
                    <BioBg />
                </BioWrapper>

                <Image
                    src="/images/profile.png"
                    alt="Vincent Nalupta's shadow against some subway tiles."
                    width={240}
                    height={320}
                    style={{
                        position: `relative`,
                        zIndex: 10                        
                    }}
                />
            </BioColumn>
            <BioColumn rhs={true} inView={inView}>
                {/* fix heading variant */}
                <h2
                    ref={bioRef}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    HELLO!
                </h2>
                <p>
                    My name is Vincent Nalupta and I am an Engineering
                    Manager.
                </p>
                <p>
                    I've won some{" "}
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
                <p
                    style={{
                        marginBottom: "30px",
                    }}
                >
                    This is my space to flex my design chops and write about
                    interesting tech.
                </p>

                <Link href="/blog">
                    {/* Fix responsive */}

                    <BioButton>Read the Blog</BioButton>
                </Link>
            </BioColumn>
        </BioContainer>
    );
}
const BioContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0 73px;

    @media (maxWidth: 540px) {
        padding: 0 25px;
    }
`;

const BioColumn = ({
    rhs,
    inView,
    children,
}: {
    rhs?: boolean;
    inView?: boolean;
    children: any;
}) => {
    const base = {
        maxWidth: "300px",
        alignSelf: "flex-end",
    };

    let styles = {
        ...base,
        ...(rhs
            ? {
                  transform: "translateX(10px)",
                  opacity: 0,
                  transition: "250ms ease-in",
              }
            : {
                  paddingRight: "50px",
                  '@media (maxWidth: 768px)': {
                      display: 'none'
                  },
                  position: "relative" as any,
              }),
        ...(rhs &&
            inView && {
                transform: "translateX(0)",
                opacity: 1,
            }),
    };

    return <div style={styles}>{children}</div>;
};
// const BioProfile = styled(BioColumn)`
//     position: relative;
//     padding-right: 50px;

//     @media (maxWidth: 768px) {
//         display: none;
//     }
// `

const BioWrapper = styled.div`
    width: 385px;
    position: absolute;
    left: -145px;
    top: -113px;
`;

const BioButton = styled(Button)<{
        children: any;
    }>`
    @media (maxwidth: 768px) {
        margin: 0 auto;
    }
`;

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
