import Link from "next/link"
import { BlogPost } from '../models/blogPost'

interface BlogIndexItemProps {
    post: BlogPost
}

export default function BlogIndexItem(props: BlogIndexItemProps) {
    const { post } = props;

    return (
        <div>
            <Link className="text-5xl" href={'/blog/' + post.slug}>{post.meta.title}</Link>
            <p className="text-lg mt-2">{post.meta.date}</p>
        </div>
    )
}