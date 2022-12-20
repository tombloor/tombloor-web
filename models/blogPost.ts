import { MDXRemoteSerializeResult } from "next-mdx-remote";


export interface BlogPostMeta {
    title: string,
    published: boolean,
    date: string,
}

export interface BlogPost {
    meta: BlogPostMeta,
    slug: string,
    //content: string,
    mdxSource: MDXRemoteSerializeResult
}