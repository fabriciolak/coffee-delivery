import styled from 'styled-components'
import { DefaultThemeType } from '../../styles/theme/default'

export const Container = styled.div`
  width: 1120px;
  max-width: 100%;

  margin: 80px auto 0 auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 32.875rem 30.75rem;
  gap: 6.375rem;
  align-items: flex-end;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  div:first-child {
    h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2rem;

      color: ${({ theme }) => theme['yellow-dark']};
    }

    p {
      font-size: 1.25rem;
      line-height: 1.5;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }
  }
`
export const AddressBox = styled.div`
  margin-top: 51px;
  padding: 2.5rem;

  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background: linear-gradient(rgb(250, 250, 250), rgb(250, 250, 250))
      padding-box padding-box,
    linear-gradient(to right, rgb(219, 172, 44), rgb(128, 71, 248)) border-box
      border-box;
  border-image: linear-gradient(to right, rgb(219, 172, 44), rgb(128, 71, 248))
    1 / 1 / 0 stretch;
  border-radius: 6px 36px;

  div:last-child {
    p {
      font-size: 1rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-text']};

      strong {
        font-weight: 700;
      }
    }
  }

  ul {
    width: 100%;
    list-style: none;

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;

      & + li {
        margin-top: 32px;
      }
    }
  }
`

interface MyIconProps {
  color: DefaultThemeType
}

export const Icon = styled.div<MyIconProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background-color: ${({ theme, color }) => theme[color]};
  color: ${({ theme }) => theme.white};
`
