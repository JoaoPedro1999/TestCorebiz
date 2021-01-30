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
