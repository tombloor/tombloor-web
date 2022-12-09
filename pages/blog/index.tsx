import Link from "next/link"
import { GetStaticProps } from 'next'

import { BlogPost } from '../../models/blogPost'
import { getPosts } from '../../services/blog/posts'
import BlogIndexItem from "../../components/BlogIndexItem"

export interface BlogIndexProps {
    posts: BlogPost[]
}

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = getPosts();

    return {
        props: {
            posts
        }
    }
}

export default function BlogIndexPage(props: BlogIndexProps) {

    return (
        <div className="container mx-auto flex flex-col items-center">
            <h1 className="text-6xl my-10">Tom Bloor's Blog</h1>

            <ul className="w-full">
                { props.posts.map((post, index) => { 
                    return (
                        <li key={index} className="my-8">
                            <BlogIndexItem post={post}></BlogIndexItem>
                        </li>
                    )            
                })} 
            </ul>
        </div>
    )
}
      