import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>AutoComplete Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" type="text" list="name-list"></input>
          <datalist id="name-list">
            <option value="John"></option>
          </datalist>
        </div>
      </main>
    </div>
  )
}
