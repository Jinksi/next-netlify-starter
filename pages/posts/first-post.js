import Head from 'next/head'

import Layout from '@components/Layout'
import styles from './first-post.module.css'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>

      <img className={styles.logo} src="/netliheart.svg" alt="netlify logo" />
    </Layout>
  )
}
