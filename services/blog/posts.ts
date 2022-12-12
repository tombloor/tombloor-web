import fs from "fs"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize";
import path from "path"

import { BlogPost, BlogPostMeta } from "../../models/blogPost"

const postsDir = path.join(path.resolve('./'), "data", "posts");

export const getPosts = async (): Promise<BlogPost[]> => {
    const files = fs.readdirSync(postsDir);

    const posts = files.map<Promise<BlogPost>>((filename, index, arr) => {
        return mdxToBlogPost(postsDir, filename);
    });

    return await Promise.all(posts);
}

export const getPostBySlug = async (slug: string): Promise<BlogPost> => {
    return mdxToBlogPost(postsDir, slug + '.mdx');
}

const mdxToBlogPost = async (folder: string, filename: string): Promise<BlogPost> => {
    const mdxWithMeta = fs.readFileSync(path.join(folder, filename), 'utf-8');

    const { data: frontMatter, content } = matter(mdxWithMeta);

    // TODO: Pass serialize options to use rehype-prism plugin for syntax highlighting
    const mdxSource = await serialize(content)

    return {
        meta: frontMatter as BlogPostMeta,
        slug: filename.split('.')[0],
        mdxSource
    }
}