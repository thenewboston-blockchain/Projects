import Head from 'next/head';

import styles from '../scss/Home.module.scss';

const Home: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
      <link rel="manifest" href="/icon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}>
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        Powered by <img src="/logo.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
);

export default Home;
