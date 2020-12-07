import Link from 'next/link'
import Header from '@components/Header'
import Layout from '@components/Layout'

export default function Home() {
  return (
    <Layout home>
      <section>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p>
          <Link href="/posts/first-post">
            <a>See first post</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}
