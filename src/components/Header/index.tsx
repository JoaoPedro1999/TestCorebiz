/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import Image from 'next/image';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiMenu, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useCart } from '@/hooks/cart';
import { DesktopHeader, MobileHeader } from './styles';
import ImputSearch from '../ImputSearch';

const Header: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { cart } = useCart();

  return (
    <>
      <MobileHeader>
        <div>
          <FiMenu size={24} />

          <Image
            width="102"
            height="25"
            src="/site-logo-corebiz-preto-cinza.svg"
          />

          <button type="button">
            <FiUser size={24} />
            Minha conta
          </button>

          <div>
            <FiShoppingCart size={24} />
            {cart && (
              <div>
                <span>{cart.length}</span>
              </div>
            )}
          </div>
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
      </MobileHeader>
      <DesktopHeader>
        <Image
          width="170"
          height="41"
          src="/site-logo-corebiz-preto-cinza.svg"
        />

        <Form ref={formRef} onSubmit={() => {}}>
          <ImputSearch
            name="search"
            icon={FiSearch}
            placeholder="O que está procurando?"
          />
        </Form>

        <div>
          <button type="button">
            <FiUser size={24} />
            Minha conta
          </button>

          <div>
            <FiShoppingCart size={24} />
            {cart && (
              <div>
                <span>{cart.length}</span>
              </div>
            )}
          </div>
        </div>
      </DesktopHeader>
    </>
  );
};
export default Header;
