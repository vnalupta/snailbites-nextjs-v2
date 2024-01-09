/* eslint-disable @next/next/no-async-client-component */

import React, { useEffect, useState } from "react";
import { getMetadata } from "@/utils/getMetadata";
import { getPost } from "@/utils/getPost";

export default async function Blog() {
    const metadata = getMetadata();
    const post = await getPost();

    // if (!props.allPostsData) return (<h1>hi</h1>);
    return (
        // <main role="main" style={{ width: ['100%', '100%', '768px'], variant: 'styles.layout' }}>
        <main>
            <section style={{ marginTop: "100px" }}>
                <h1>Blogs</h1>
                <ul>
                    {metadata &&
                        metadata.map((post, i) => (
                            <li key={post.id}>{post.id}</li>
                        ))}
                </ul>
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </section>
            <section></section>
        </main>
    );
}

// {blogs &&
//   blogs.map((blog) => {
//     return (
//       <li key={blog.slug}>
//         <Link href={{ pathname: `/blog/${blog.slug}` }}>
//           {blog.frontmatter.title}
//         </Link>
//       </li>
//     )
//   })}
