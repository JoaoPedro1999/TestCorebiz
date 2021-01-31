import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import Image from 'next/image';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <div>
      <strong>Localização</strong>
      <span>Avenida Andrômeda, 2000. Bloco 6 e 8</span>
      <span>Alphavile SP</span>
      <span>brasil@corebiz.ag</span>
      <span>+55 11 3090 1039</span>
    </div>
    <div>
      <button type="button">
        <FiMail size={18} />
        <span>Entre em contato</span>
      </button>

      <button type="button">
        <FiPhone size={18} />
        <span>Fale com nosso consultor online</span>
      </button>
    </div>
    <div>
      <Image height="30" width="71" src="/Corebiz_footer.svg" />

      <Image height="35" width="53" src="/VTEX.svg" />
    </div>
  </Container>
);

export default Footer;
