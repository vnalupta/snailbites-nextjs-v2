/* eslint-disable @next/next/no-async-client-component */
import { getMetadata } from "@/utils/getMetadata";
import { getPost } from "@/utils/getPost";

import BlogBody from "@/components/blogbody";

export default async function Blog ({
  params
}: {
  params: { slug: string }
}) {
    const metadata = getMetadata();
    const post = await getPost(params.slug);

    return <BlogBody metadata={metadata} post={post} />
}