import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// import { Container } from './styles';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Ecommerce | Corebiz</title>
    </Head>
    <div>
      <Image
        width="102"
        height="25"
        layout="responsive"
        src="/site-logo-corebiz-preto-cinza.svg"
      />
    </div>
  </>
);

export default Home;
