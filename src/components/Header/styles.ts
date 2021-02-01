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

    button + div {
      div {
        border-radius: 50%;
        width: 1.6rem;
        height: 1.6rem;
        background: #f8475f;
        margin-left: 0.8rem;

        span {
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.4rem;
          text-align: center;
          margin-left: 0.4rem;
          color: ${props => props.theme.colors.background};
        }
      }
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

    button + div {
      div {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        background: #f8475f;
        margin-left: 0.8rem;

        span {
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 1.4rem;
          text-align: center;
          margin-left: 0.6rem;
          color: ${props => props.theme.colors.background};
        }
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
