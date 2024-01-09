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
export function getMetadata() {
    // Get file names under /posts
    const dirNames = fs.readdirSync(postsDirectory);

    const allMetadata = dirNames.map((currentDirName) => {
        const relPath = `${BLOG_ROOT}/${currentDirName}`;
        const currDir = `${process.cwd()}/${relPath}`;

        const fileNames = fs.readdirSync(currDir);
        const markdownFilename = fileNames.find(file => file.endsWith('md'));

        // Read markdown file as string
        const fullPath = path.join(currDir, markdownFilename || '');
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        // currentDirName should have same name as md file
        return {
            id : currentDirName,
            relPath,
            ...matterResult.data,
        };
    });

    // @ts-ignore
    // Sort posts by id
    return allMetadata.sort((a, b) => {
        if (a.id < b.id) {
            return 1;
        } else {
            return -1;
        }
    });
}
