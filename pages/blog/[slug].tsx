import { GetStaticPaths, GetStaticProps } from "next"

interface BlogPostProps {
    slug: string,
    title: string,
    content: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    // This will come from the file system, looking at the data/posts folder and reading all MDX files

    return {
        paths: [
            { params: { slug: 'test-1', path:'test-1.mdx' }}, 
            { params: { slug: 'test-2', path:'test-2.mdx' }}
        ],
        fallback: false // Return 404 if page not found, ie build only paths in the array
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    // Get mdx file with context.params.path

    // Read it to get the props to pass to the page component

    let pageProps: BlogPostProps = {
        title: 'Test 1',
        slug: 'test-1',
        content: 'abc'
    }

    return {
        props: pageProps
    }
}

export default function BlogPost(props: BlogPostProps) {
    

    return (
        <div>
            {props.content}
        </div>
    )
}