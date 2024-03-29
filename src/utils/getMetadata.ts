import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

// should move this const to next config or something
const BLOG_ROOT = "blogs";
const postsDirectory = path.join(process.cwd(), BLOG_ROOT);

export interface PostMetadata {
    id: number;
    relPath: string;
    title: string;
    date?: Date;
    description?: string;
    meta?: string;
    path?: string;
}

/**
 * Reads metadata from blog md files
 * and returns them in sorted order
 *
 * @returns Array<string>
 */
export function getMetadata () {
    const fileNames = fs.readdirSync(postsDirectory);

    const allMetadata = fileNames.map(post => {
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, post);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return {
            id: matterResult.data.path,
            ...matterResult.data,
        };
    });

    // Sort posts by id
    return allMetadata.sort((a, b) => {
        // @ts-ignore
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
