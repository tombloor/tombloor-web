import fs from "fs"
import matter from "gray-matter"
import path from "path"

import { BlogPost, BlogPostMeta } from "../../models/blogPost"

const postsDir = path.join(path.resolve('./'), "data", "posts");

export const getPosts = (): BlogPost[] => {
    const files = fs.readdirSync(postsDir);

    const posts = files.map<BlogPost>((filename, index, arr) => {
        return mdxToBlogPost(postsDir, filename);
    });

    return posts;
}

export const getPostBySlug = (slug: string): BlogPost => {
    return mdxToBlogPost(postsDir, slug + '.mdx');
}

const mdxToBlogPost = (folder: string, filename: string): BlogPost => {
    const mdxWithMeta = fs.readFileSync(path.join(folder, filename), 'utf-8');

    const { data: frontMatter, content } = matter(mdxWithMeta);

    return {
        meta: frontMatter as BlogPostMeta,
        slug: filename.split('.')[0],
        content
    }
}