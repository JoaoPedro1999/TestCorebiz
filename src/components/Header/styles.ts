/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MobileHeader = styled.header`
  display: flex;
  flex-direction: column;

  height: 8rem;
  margin: 2rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > button {
      display: none;
    }
  }

  div + div {
    width: 100%;
    margin-top: 1.6rem;

    form {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const DesktopHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 8rem;
  margin: 0 1.6rem;

  form {
    width: 70rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-left: 0;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 12rem;
      margin-left: 1rem;
      margin-right: 1rem;

      background: transparent;
      border: none;

      font-size: 1.3rem;
      font-weight: 400;
      line-height: 1.8rem;
      color: ${props => props.theme.colors.input};

      svg {
        margin-right: 0.8rem;
        color: ${props => props.theme.colors.secundary};
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
