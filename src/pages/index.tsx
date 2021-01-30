import React from 'react';
import Head from 'next/head';

import Header from '@/components/Header';

import { Container } from '@/styles/home/index';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Ecommerce | Corebiz</title>
    </Head>
    <Header />

    <Container>
      <div>
        <h2>Olá, o que você está buscando?</h2>
        <h1>Criar ou migrar seu e-commerce?</h1>
      </div>
    </Container>
  </>
);

export default Home;
