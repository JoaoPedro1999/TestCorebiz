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

  @media (min-width: 1100px) {
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

export const Newsletter = styled.div`
  background: ${props => props.theme.colors.tertiary};

  height: 28rem;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div + span {
    font-family: 'Lato';
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.2rem;
    letter-spacing: 0em;
    text-align: left;
  }

  form {
    margin-top: 1.6rem;
  }

  @media (min-width: 1100px) {
    height: 15rem;

    span {
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

  @media (min-width: 1100px) {
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
