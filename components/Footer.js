import Link from 'next/link'

import styles from './Footer.module.scss'

export default function Footer({ home }) {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logoWrap}>
          Made with{' '}
          <img
            src="/netliheart.svg"
            alt="Netlify Logo"
            className={styles.logo}
          />{' '}
          for you
        </div>
        {!home && (
          <div style={{ marginTop: 10 }}>
            <Link href="/">
              <a className={styles.backToHome}>← Back to home</a>
            </Link>
          </div>
        )}
      </footer>
    </>
  )
}
