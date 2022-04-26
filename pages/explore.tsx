import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '../components/';
import { Heading } from '../components/UI';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading>Explore creators</Heading>
      </Layout>
    </>
  );
};

export default Home;
