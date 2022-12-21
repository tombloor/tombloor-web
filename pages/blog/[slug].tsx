import { GetStaticPaths, GetStaticProps } from "next"
import { BlogPost } from "../../models/blogPost"
import { getPostBySlug, getPosts } from "../../services/blog/posts";

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import PageTitle from "../../components/PageTitle"

import styles from '../../styles/post.module.css'

interface BlogPostProps {
    post: BlogPost,
    compiledMdx: string
}

interface BlogPostPathParams {
    slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getPosts();

    const paths = posts.map((post, index, arr) => {
        return { params: { slug: post.slug } }
    });

    return {
        paths: paths,
        fallback: false // Return 404 if page not found, ie build only paths in the array
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug: string = context.params!.slug as string;
    const post = await getPostBySlug(slug);
    
    return {
        props: { 
            post: post,
            compiledMdx: post.mdxSource.compiledSource
        }
    }
}

export default function BlogPostPage(props: BlogPostProps) {
    const { post, compiledMdx } = props;

    return (
        <div className={styles.post + " container max-w-3xl mx-auto p-4 flex flex-col items-center"}>
            <PageTitle title="Tom Bloor's Blog"></PageTitle>
            
            <div className="w-full">
                <h2>{post.meta.title}</h2>
                <MDXRemote compiledSource={compiledMdx}></MDXRemote>
            </div>
        </div>
    )
}