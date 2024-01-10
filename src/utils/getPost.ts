import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';

// should move this const to next config or something
const BLOG_ROOT = "blogs";
const FEATURE_POST = "redesign";
const postsDirectory = path.join(process.cwd(), BLOG_ROOT);

/**
 * Reads metadata from blog md files
 * and returns them in sorted order
 *
 * @returns Array<string>
 */
export async function getPost(shortname: string = FEATURE_POST) {
    const allFileNames = fs.readdirSync(postsDirectory);
    const filename = allFileNames.find(file => file.endsWith(`${shortname}.md`));
    console.log(shortname, filename)

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename || "");
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

     // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html, {sanitize: false})
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    // currentDirName should have same name as md file
    return {
        title: matterResult?.data?.title,
        contentHtml
    };
}
