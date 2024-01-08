import React from "react";
import styled from "styled-components"
// import Link from "next/link"

const BlogFeed = () => {

    return (
        <>
            <p className="lead" style={{marginBottom: `.5em;`}}>Blog Posts</p>
            <StyledList>
                {/*
                {entries.map((entry, i) => (
                    <li className="body" key={i}>
                         <FadeLink 
                            to={`blog/${entry.node.fields.slug}`}
                        >
                            {entry.node.frontmatter.title}
                        </FadeLink> 
                    </li>
                ))}
            */}
            </StyledList>
        </>
    )
}

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`

export default BlogFeed;
