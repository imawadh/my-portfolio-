import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'app/data/posts');

// Helper to get all post slugs
export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  const allFiles = fs.readdirSync(postsDirectory);
  return allFiles.filter((fileName) => fileName.endsWith('.md'));
}

// Get single post by slug
export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const htmlContent = marked(content);

  return {
    slug: realSlug,
    meta: data,
    content: htmlContent,
  };
}

// Get all posts sorted by date
export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      const realSlug = slug.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, `${realSlug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: realSlug,
        ...data,
      };
    })
    .sort((post1, post2) => ((post1.date || '') > (post2.date || '') ? -1 : 1));
  return posts;
}
