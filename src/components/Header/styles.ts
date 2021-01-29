/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 8rem;
  margin: 2rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    svg:nth-child(3) {
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

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;

    margin: 0 1.6rem;

    div:first-child {
      svg:first-child {
        display: none;
      }

      svg:nth-child(3) {
        display: unset;
        margin: 0 2rem 0 4rem;
      }
    }

    div + div {
      form {
        width: 50%;
      }

      margin-top: 0;
    }
  }
`;
