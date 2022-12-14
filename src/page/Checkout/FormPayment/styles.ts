import styled from 'styled-components'

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;

  color: ${({ theme }) => theme['base-subtitle']};
`

export const Card = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 15px;

  border-radius: 6px;

  background-color: ${({ theme }) => theme['base-card']};
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  gap: 8px;

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      font-size: 1rem;
      line-height: 1.3;

      color: ${({ theme }) => theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5;

      color: ${({ theme }) => theme['base-text']};
    }
  }
`

export const Group = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  div {
    display: flex;
    gap: 12px;
    /* flex-wrap: wrap; */
  }

  @media (max-width: 1080px) {
    div {
      width: 100%;
      flex-wrap: wrap;
    }
  }

  /* Input Size */
  @media (max-width: 960px) {
    width: 100%;
  }
`

interface InputProps {
  size?: string
}

export const Input = styled.div<InputProps>`
  position: relative;
  width: ${({ size }) => size || '100%'};

  input {
    /* width: ${({ size }) => size || '100%'}; */
    width: inherit;

    height: 2.625rem;
    padding: 0.75rem;
    border-radius: 4px;

    border: 1px solid ${({ theme }) => theme['base-button']};
    background-color: ${({ theme }) => theme['base-input']};

    font-size: 0.875rem;

    color: ${({ theme }) => theme['base-label']};

    &:focus {
      outline: 1px solid ${({ theme }) => theme['yellow-dark']};
    }
  }

  span {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    color: #8d8686;
    font-size: 12px;
    font-style: italic;
  }
`

export const PaymentMethodButton = styled.button`
  width: 11.1669rem;
  height: 3.1875rem;
  display: flex;
  align-items: center;
  gap: 12px;

  flex: 1;

  font-size: 12px;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${({ theme }) => theme['base-text']};

  padding: 1rem;

  border: none;
  border-radius: 6px;
  outline: none;
  background-color: ${({ theme }) => theme['base-button']};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.purple};
    background-color: ${({ theme }) => theme['purple-light']};
  }

  @media (max-width: 640px) {
    flex: auto;
  }
`
