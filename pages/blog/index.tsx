import Link from "next/link";
import { BlogPost } from "../../models/blogPost"

export default function BlogIndex() {
    const posts: BlogPost[] = [
        {
            slug: 'test-1',
            content: <p>'abeo eosugnesougne fse es'</p>,
            publishDate: new Date('2022-12-01'),
            published: true,
            title: 'Test post 1'
        },
        {
            slug: 'test-2',
            content: <p>'abeo eosugnesougne fse es'</p>,
            publishDate: new Date('2022-12-02'),
            published: true,
            title: 'Test post 2'
        },
    ];

    return (
        <div className="container mx-auto flex flex-col items-center">
            <h1 className="text-6xl my-10">Tom Bloor's Blog</h1>

            { posts.map(p => { 
                return (
                    <div>
                        <Link href={'/blog/' + p.slug}>{p.title}</Link>
                    </div>
                )            
            })}
        </div>
    )
}
      