import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'
import utilStyles from '@styles/utils.module.css'
import styles from './Layout.module.scss'

const name = 'Eric'
export const siteTitle = "Eric's Next.js Sample Website"

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.Layout}>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/toy.png"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/toy.png"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>

        <main>{children}</main>
      </div>

      <Footer home={home} />
    </>
  )
}
