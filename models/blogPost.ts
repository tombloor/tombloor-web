

export interface BlogPostMeta {
    title: string,
    published: boolean,
    publishDate: Date,
}

export interface BlogPost {
    meta: BlogPostMeta,
    slug: string,
    content: string
}