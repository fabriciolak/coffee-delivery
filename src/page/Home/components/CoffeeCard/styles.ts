import styled from 'styled-components'
import { DefaultThemeType } from '../../../../styles/theme/default'

export const CoffeeContainer = styled.div`
  width: 100%;
  border-radius: 6px 36px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme['base-card']};

  img {
    margin-top: -40px;
  }
`

export const CoffeeTag = styled.div`
  display: flex;
  gap: 4px;

  margin-top: 0.75rem;

  span {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    border-radius: 100px;
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    padding: 4px 8px;
  }
`

export const CoffeeContent = styled.div`
  margin-top: 1rem;
  margin-top: 0.5rem;

  text-align: center;

  strong {
    font-family: 'Baloo 2';

    font-size: 1.25rem;
    font-weight: 700;

    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    width: 14.75rem;
    height: 2.25rem;
    margin-bottom: 2.0625rem;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme['base-label']};
  }
`

export const CoffeeFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'Baloo 2';
    font-size: 24px;
    font-weight: 800;

    span {
      font-family: 'Roboto';
      font-size: 14px;
      font-weight: 400;
    }
  }

  div {
    display: flex;
    gap: 8px;
  }
`

export const CoffeeOrderButton = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 6px;
  padding: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme['base-button']};

  button {
    background-color: transparent;
    border: none;
    outline: none;

    svg {
      color: ${({ theme }) => theme.purple};
      cursor: pointer;
    }

    svg:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme['base-title']};
  }
`

interface ButtonTypes {
  fill: DefaultThemeType
}

export const CoffeeCartButton = styled.button<ButtonTypes>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  border: none;
  outline: none;

  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme[props.fill]};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.purple};
  }

  .button-legend {
    position: absolute;
    top: -8px;
    right: -8px;

    width: 20px;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
  }

  @media (max-width: 640px) {
    p {
      display: none;
    }
  }
`
