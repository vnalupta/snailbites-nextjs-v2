import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// should move this const to next config or something
const BLOG_ROOT = 'blogs';
const postsDirectory = path.join(process.cwd(), BLOG_ROOT);

/**
 * Reads metadata from blog md files
 * and returns them in sorted order
 * 
 * @returns Array<string>
 */
export function getSortedPostsData() {
  // Get file names under /posts
  const dirNames = fs.readdirSync(postsDirectory);
  const allPostsData = dirNames.map((currentDirName) => { 
    const relPath = `${BLOG_ROOT}/${currentDirName}`;
    const currDir = `${process.cwd()}/${relPath}`;

    const fileNames = fs.readdirSync(currDir); 
    const fileName = fileNames[0]; // fileNames should return an array with 1 item

    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(currDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      relPath,
      ...matterResult.data,
    };
  });

  // Sort posts by id
  return allPostsData.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}