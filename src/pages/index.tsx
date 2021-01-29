import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Header from '@/components/Header';

// import { Container } from './styles';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Ecommerce | Corebiz</title>
    </Head>
    <Header />
  </>
);

export default Home;
