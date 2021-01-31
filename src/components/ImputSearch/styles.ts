/* eslint-disable no-shadow */
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.background};
  border-bottom: 0.2rem solid ${props => props.theme.colors.input};
  height: 3rem;
  padding: 1.6rem 0 1.6rem 0;

  width: 100%;
  color: ${props => props.theme.colors.input};
  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.8rem;
  }

  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
      border: 0.2rem solid #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${props => props.theme.colors.input};
      border-bottom: 0.2rem solid ${props => props.theme.colors.input};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props => props.theme.colors.input};
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${props => props.theme.colors.input};
    &::placeholder {
      color: ${props => props.theme.colors.input};
    }
  }

  svg {
    margin-left: 1.6rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.6rem;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
