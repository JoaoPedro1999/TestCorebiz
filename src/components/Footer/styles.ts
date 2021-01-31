import styled from 'styled-components';

export const Container = styled.footer`
  background: ${props => props.theme.colors.secundary};

  width: 100%;
  height: 38rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:nth-child(1) {
    width: 30rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    strong {
      color: ${props => props.theme.colors.background};
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.4rem;
      text-align: left;
      padding-bottom: 0.8rem;
      margin-bottom: 1.6rem;

      border-bottom: 0.5rem solid ${props => props.theme.colors.background};
    }

    span {
      color: ${props => props.theme.colors.background};
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 1.2rem;
      text-align: left;
      margin-bottom: 1rem;
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    flex-direction: column;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.8rem;
      width: 20rem;
      margin-top: 3.2rem;

      border: none;
      border-radius: 0.5rem;

      background: ${props => props.theme.colors.background};

      span {
        max-width: 13rem;

        font-weight: 600;
        font-size: 1.2rem;
        font-style: normal;
        letter-spacing: 0em;
        text-align: left;
        text-transform: uppercase;
      }

      svg {
        margin-right: 2rem;
      }
    }
  }

  div:nth-child(3) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 20rem;
    margin-top: 1.6rem;
  }

  @media (min-width: 1100px) {
    height: 22rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    div:nth-child(1) {
      width: 23rem;

      strong {
        font-size: 2rem;
        line-height: 2.8rem;
      }
    }

    div:nth-child(2) {
      width: 20rem;
    }

    div:nth-child(3) {
    }
  }
`;
