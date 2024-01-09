import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';

// should move this const to next config or something
const BLOG_ROOT = "blogs";
const postsDirectory = path.join(process.cwd(), BLOG_ROOT);

/**
 * Reads metadata from blog md files
 * and returns them in sorted order
 *
 * @returns Array<string>
 */
export async function getPost(shortname?: string) {
    let cwd;

    if (!shortname) {
        const allDirNames = fs.readdirSync(postsDirectory);
        const mostRecentBlog = allDirNames[allDirNames.length - 1];
        cwd = `${process.cwd()}/${BLOG_ROOT}/${mostRecentBlog}`;
    } else {
        cwd = shortname;
    }

    const fileNames = fs.readdirSync(cwd);
    const markdownFilename = fileNames.find((file) => file.endsWith("md"));

    // Read markdown file as string
    const fullPath = path.join(cwd, markdownFilename || "");
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

     // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html, {
            sanitize: false
        })
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    // currentDirName should have same name as md file
    return {
        title: matterResult?.data?.title,
        contentHtml
    };
}
