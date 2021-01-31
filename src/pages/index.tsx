/* eslint-disable global-require */
import React, { useCallback, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '@/services/api';
import getValidationsErros from '@/utils/getValidationErrors';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Input from '@/components/Input';
import {
  Container,
  Newsletter,
  NewsletterSuccessful,
} from '@/styles/home/index';
import Button from '@/components/Button';

interface IProduct {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | undefined;
  price: number;
  installments: [
    {
      quantity: number;
      value: number;
    },
  ];
}

interface HomeProps {
  products: IProduct[];
}

interface NewsletterFormData {
  name: string;
  email: string;
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const formRef = useRef<FormHandles>(null);
  const [successful, setSucessful] = useState(false);

  const handleSubmit = useCallback(
    async ({ email, name }: NewsletterFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          name: Yup.string().required('Nome Obrigatório'),
        });

        await schema.validate(
          { email, name },
          {
            abortEarly: false,
          },
        );

        await api.post('/newsletter', { name, email });
        setSucessful(true);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErros(err);

          formRef.current?.setErrors(errors);
        }
      }

      formRef.current?.reset();
    },
    [],
  );

  const handleNewRegister = useCallback(() => {
    setSucessful(false);
  }, []);

  return (
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

      {successful === false ? (
        <Newsletter>
          <span>Participe de nossas news com promoções e novidades!</span>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Digite seu nome" />
            <Input type="email" name="email" placeholder="Digite seu email" />
            <Button type="submit">Eu quero!</Button>
          </Form>
        </Newsletter>
      ) : (
        <NewsletterSuccessful>
          <strong>Seu e-mail foi cadastrado com sucesso!</strong>
          <span>
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </span>
          <Button type="submit" onClick={handleNewRegister}>
            Cadastrar novo e-mail!
          </Button>
        </NewsletterSuccessful>
      )}
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data: products } = await api.get<IProduct[]>('products');

  return {
    props: {
      products,
    },
  };
};

export default Home;
