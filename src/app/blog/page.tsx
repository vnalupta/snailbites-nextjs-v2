/* eslint-disable @next/next/no-async-client-component */
import { getMetadata } from "@/utils/getMetadata";
import { getPost } from "@/utils/getPost";

import BlogBody from "@/components/blogbody";

export default async function BlogHome () {
    const metadata = getMetadata();
    const post = await getPost();

    return <BlogBody metadata={metadata} post={post} />
}
