/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import Image from 'next/image';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiMenu, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Container } from './styles';
import ImputSearch from '../ImputSearch';

const Header: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <div>
        <FiMenu size={24} />

        <Image
          width="102"
          height="25"
          src="/site-logo-corebiz-preto-cinza.svg"
        />

        <FiUser size={24} />

        <FiShoppingCart size={24} />
      </div>

      <div>
        <Form ref={formRef} onSubmit={() => {}}>
          <ImputSearch
            name="search"
            icon={FiSearch}
            placeholder="O que está procurando?"
          />
        </Form>
      </div>
    </Container>
  );
};
export default Header;
