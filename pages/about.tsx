import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function About() {
    const router = useRouter();

    const links = [
        { text: 'Home', href: '/' },
        { text: 'Blog', href: '/blog' },
        { text: 'Projects', href: '/projects' },
      ];

    return (
        <div>
            <Head>
                <title>Tom Bloor - Full Stack Software Engineer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='h-screen flex flex-col items-center justify-center font-bold text-xl text-center'>
                <div className='p-4'>
                    <h1 className='p-4'>Hi!</h1>
                    <p className='p-4'>
                        I am a Full Stack Software Engineer with over 10 years of professional work experience.
                    </p>
                    <p className='p-4'>At the moment I'm mainly working with (but not limited to):</p>
                    <ul className='p-4 list-disc w-fit mx-auto'>
                        <li>.NET</li>
                        <li>Postgres</li>
                        <li>Next.js</li>
                        <li>Firebase</li>
                    </ul>
                    <p className='p-4'>
                        I'm recently started a casual blog for programming and other interests of mine. Please stop
                        by now and again to see what I'm up to.
                    </p>
                </div>

                <nav className='text-2xl mt-12'>
                    <ul className='flex space-x-8'>
                        { links.map((link, index) => {
                            return (
                            <li key={index}>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                            )
                        })
                        }
                    </ul>
                </nav>
            </main>
            
        </div>
    )
}