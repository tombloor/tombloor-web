import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const links = [
    { text: 'Blog', href: '/blog' },
    { text: 'About', href: '/about' },
    { text: 'Projects', href: '/projects' },
  ];

  return (
    <div>
      <Head>
        <title>Tom Bloor - Full Stack Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-screen h-screen flex flex-col items-center justify-center font-bold text-center'>
        <h1 className='text-8xl'>
          Tom Bloor
        </h1>

        <h2 className='text-5xl mt-6'>
          Full Stack Software Engineer
        </h2>

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
