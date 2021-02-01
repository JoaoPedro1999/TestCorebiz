import styled from 'styled-components';

export const Container = styled.div`
  background: url('/Mask_Group.svg') no-repeat right;
  height: 19rem;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 28rem;
    height: 13rem;

    h1 {
      font-family: 'Nunito', sans-serif;
      font-weight: 900;
      font-size: 3rem;
      line-height: 3rem;
      text-align: left;
      color: #ffff;
    }

    h2 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2rem;
      color: #ffff;

      margin-bottom: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    background: url('/Mask_Group.svg') no-repeat center;
    height: 43rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    div {
      width: 46rem;
      height: 14rem;

      margin-left: 18rem;

      h1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 900;
        font-size: 4.5rem;
        line-height: 4.5rem;
        text-align: left;
        color: #ffff;
      }

      h2 {
        font-weight: 700;
        font-size: 3rem;
        line-height: 4rem;
        color: #ffff;

        margin-bottom: 0.8rem;
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 11rem;

  strong {
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.7rem;
    text-align: left;
    align-self: flex-start;

    margin-top: 2rem;
    margin-bottom: 2rem;

    border-bottom: 0.5rem solid ${props => props.theme.colors.border};
  }

  @media (max-width: 1024px) {
    margin: 1.6rem;
  }
`;

export const Products = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  overflow-x: auto;
`;

export const ProductCard = styled.div`
  width: 21.6rem;
  height: 40rem;

  & + div {
    margin-left: 10rem;
  }

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;

    > span {
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.6rem;
      text-align: center;
    }

    span + span {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.5rem;
      text-align: center;
    }

    span:last-child {
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: center;
    }

    button {
      height: 3.2rem;
      width: 12rem;
      margin-top: 0.8rem;

      background: ${props => props.theme.colors.secundary};
      border: none;
      border-radius: 0.5rem;
      color: ${props => props.theme.colors.background};

      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.6rem;
      text-align: center;
    }

    &:hover {
      background: ${props => props.theme.colors.input};
    }
  }

  @media (max-width: 1024px) {
    & + div {
      margin-left: 1rem;
    }
  }
`;

export const Newsletter = styled.div`
  background: ${props => props.theme.colors.tertiary};

  height: 28rem;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-family: 'Lato';
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 2.2rem;
    text-align: left;
  }

  form {
    margin-top: 1.6rem;
    width: 100%;
  }

  @media (min-width: 1024px) {
    height: 15rem;

    > span {
      font-size: 2.2rem;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const NewsletterSuccessful = styled.div`
  background: ${props => props.theme.colors.tertiary};

  height: 18rem;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-family: 'Lato';
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.4rem;
    letter-spacing: 0em;
    text-align: center;
  }

  span {
    font-family: 'Lato';
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.2rem;
    letter-spacing: 0em;
    text-align: center;

    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }

  @media (min-width: 1024px) {
    height: 15rem;

    span {
      font-size: 1.2rem;
      text-align: center;
    }

    button {
      width: 32rem;
    }
  }
`;
