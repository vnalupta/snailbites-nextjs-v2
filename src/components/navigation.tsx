import Link from "next/link";
import React, { useState } from "react"
import styled from "styled-components"
import { Color } from "@theme/theme"
import { useRouter } from "next/router";

const rootPath = `/`
const blogPath = `/blog/`
const cvPath = `/cv/`

function Navigation() {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const location = router.pathname;

    function scrollHandler(target) {  
        if (!target) {
            return;
        }
    
        if (target === 'work') {
            setTimeout(() => {
                // convert to Ref
                const height = document.getElementById('work').offsetTop || 1600;
                window.scrollTo({ top: height - 100, behavior: 'smooth' })
            }, 600);   
        }
    
        if (target === 'home') {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }, 600);  
        }         
    }

    const handleClick = (target?: EventTarget) => {
        setOpen(!open);

        // TODO: get location from target
        if (location === rootPath && !!target) {
            scrollHandler(target);
        }        
    }
    return (
        <StyledNav open={open}>
            <StyledNavButton
                location={location}
                aria-label="navigation"
                onClick={e => handleClick()}
                open={open}
            >
                <div></div>
                <div></div>
                <div></div>
            </StyledNavButton>
            <StyledBackdrop open={open} />
            <StyledList location={location} open={open}>
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
            </StyledList>
        </StyledNav>
    )
}
    const StyledNav = styled.nav<{ 
        open?: boolean; 
    }>`
        position: fixed;
        z-index: ${props => props.open ? 1000 : 20};
    `;

    const StyledBackdrop = styled.div<{ 
            open?: boolean; 
        }>`
        position: fixed;
        top: 0;
        left: 0;    
        z-index: 1;

        height: 100vh;
        width: 100vw;

        background-color: ${Color.eggshell};
        
        transform: translate3d(${props => props.open ? 0 : `-100vw`}, 0, 0);    
        transition: 350ms ease-out;
        transition-delay: 50ms;
    `;

    const StyledList = styled.ul<{ 
            location: string;
            open?: boolean; 
        }>`
        transition: 200ms visibility ease-in;
        visibility: ${props => props.open ? 'visible' : 'hidden'};

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100vw;
        height: 100vh;

        position: absolute;
        top: -1em;    
        
        padding: 0;
        margin: 0;

        list-style-type: none;    
        z-index: 1;    

        & > li {
            transition: 200ms opacity ease-in;
            transition-delay: 50ms;
            opacity: ${props => props.open ? 1 : 0};

            text-transform: uppercase;
            margin-bottom: .5em;

            & > a {
                text-decoration: none;
                color: ${Color.sesame};

                &.selected {
                    pointer-events: none;
                    color: ${Color.plum};  
                }
                
                &:after {
                    content: '';
                    width: 0;
                    height: 4px;
                    display: block;
                    background: ${Color.sesame};
                    transition: width 250ms ease-in-out;
                }

                &:hover:after {
                    width: 100%;
                }

                &.selected:after {                
                    transition: none;
                    width: 100%;
                    background: ${Color.plum};
                }
            }
        }    
    `

    const baseUnit = `11px`;
    const baseTiming = `250ms`;

    const StyledNavButton = styled.div<{
            location: string
            open: boolean
        }>`
        position: relative;
        cursor: pointer;
        z-index: 100;

        width: calc(${baseUnit} * 3);
        height: calc(${baseUnit} * 3);
        margin: calc(${baseUnit} * 2) 0 0 calc(${baseUnit} * 2);
    
        & > div {
            position: absolute;
            left: 0;

            height: 4px;
            width: 100%;

            opacity: 1;
            transform: rotate(0);
                
            transition-property: top, left, rotate, opacity, transform, background-color;
            transition-duration: ${baseTiming};
            transition-timing-function: ease-in;    

            background-color: ${props => props.location === "/"
                ? props.open
                    ? Color.sesame
                    : Color.eggshell
                : Color.sesame
            };        
        }
        
        & div:nth-child(1) {
            top: ${props => props.open ? baseUnit : 0};
            ${props => props.open && `transform: rotate(135deg)`};
        }
        
        & div:nth-child(2) {
            top: ${baseUnit};
            ${props => props.open &&
                `opacity: 0;
                left: calc(${baseUnit} * -4);`
            }
        }
        
        & div:nth-child(3) {
            top: ${props => props.open
                    ? `calc(${baseUnit})`
                    : `calc(${baseUnit} * 2)`
                };
            ${props => props.open && `transform: rotate(-135deg)`};
        }
    `


    export default Navigation
