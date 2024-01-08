import Link from "next/link";

import React, { FC } from "react"
import { Color } from '../theme/theme';
import styled from "styled-components";
import { useRouter } from "next/router";

const rootPath = `/`
const blogPath = `/blog/`

function Social() {
    const router = useRouter()
    const location = router.pathname;

    return (
        <SocialWrapper location={location} className="body">
            <SocialTitle>What's good?</SocialTitle>
            <StyledList>
                <li><a href="https://twitter.com/snailbites">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/vnalupta/">LinkedIn</a></li>
            </StyledList>
            <StyledList>
                <li>
                    <Link href={rootPath}>Home</Link>
                </li>
                <li>
                    <Link href={blogPath}>Blog</Link>
                </li>
            </StyledList>
        </SocialWrapper>
    )
}

const SocialWrapper = styled.div<{
        location: string
    }>`  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    transform: translateY(-1.7em);

    background-color: ${props => props.location !== "/"
        ? Color.sesame
        : Color.plum};
    color: ${Color.eggshell};
`

const SocialTitle = styled.p`
    margin-bottom: .5em;
`

const StyledList = styled.ul`
    margin: 0 0 .5em 0;
    padding: 0;
    list-style-type: none;

    & li {
        display: inline;   
        margin-left: 1em;     
    }
`

export default Social
