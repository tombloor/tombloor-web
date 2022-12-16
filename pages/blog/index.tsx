import Link from "next/link"
import { GetStaticProps } from 'next'

import { BlogPost } from '../../models/blogPost'
import { getPosts } from '../../services/blog/posts'
import BlogIndexItem from "../../components/BlogIndexItem"
import PageTitle from "../../components/PageTitle"

export interface BlogIndexProps {
    posts: BlogPost[]
}

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = await getPosts();

    return {
        props: {
            posts
        }
    }
}

export default function BlogIndexPage(props: BlogIndexProps) {

    return (
        <div className="container max-w-3xl mx-auto p-4 flex flex-col items-center">
            <PageTitle title="Tom Bloor's Blog"></PageTitle>

            <ul className="w-full">
                { props.posts.map((post, index) => { 
                    return (
                        <li key={index} className="my-10">
                            <BlogIndexItem post={post}></BlogIndexItem>
                        </li>
                    )            
                })} 
            </ul>
        </div>
    )
}
      