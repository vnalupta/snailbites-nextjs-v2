import React, { useEffect, useState } from "react";
import {
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group"
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

const DURATION = 200;

const defaultStyle = {
    transition: `opacity ${DURATION}ms ease-in`,
    opacity: 0,
}

const transitionStyles = {
    entering: {
        position: `absolute`,
        opacity: 0,
    },
    entered: {
        opacity: 1,
    },
    exiting: {
        opacity: 0,
    }
}

const Transition = ({ children, location }) => {
    const router = useRouter();
    // const [theme, setTheme] = useState(GlobalTheme);

    useEffect(() => {
        // The location is one state behind
        // so that's why this is backwards
        // const theme = location === '/' ? GlobalTheme : BlogTheme     
        // setTheme(theme)     
    }, [])

    return (
        <TransitionGroup style={{ position: `relative` }}>
            <ReactTransition
                key={router.pathname}
                timeout={DURATION}
                onExited={() => {
                    // The location is one state behind
                    // so that's why this is backwards
                    // const currTheme = location !== '/' ? GlobalTheme : BlogTheme;
                    // setTheme(currTheme);                    
                }}                
            >
                {status => {
                    return (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[status],
                            }}
                        >
                            {/* <ThemeProvider theme={theme}>
                                {children}
                            </ThemeProvider> */}
                        </div>
                    )
                }}
            </ReactTransition>
        </TransitionGroup>
    )
}

export default Transition;

// const FadeProvider = props => {
//     return (
//         <div style={{
//             ...defaultStyle,
//             ...transitionStyles[props.status]
//           }}>{props.children}</div>
//     )
// }