import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.background};
  height: 4.8rem;
  border-radius: 0.5rem;
  border: 0;
  padding: 0 1.6rem;
  width: 100%;

  font-weight: 700;
  font-family: 'Lato';
  font-size: 1.4rem;
  line-height: 1.4rem;
  letter-spacing: 0em;
  text-align: center;

  margin-top: 1.6rem;
  transition: background 0.2s;
  &:hover {
    background: ${props => shade(0.2, props.theme.colors.secundary)};
  }

  @media (min-width: 1100px) {
    margin-top: 0rem;

    width: 14rem;
  }
`;
