import styled from 'styled-components'
import { DefaultThemeType } from '../../styles/theme/default'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1120px;
  height: 104px;

  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

interface ButtonTypes {
  fill: DefaultThemeType
  iconColor: DefaultThemeType
}

export const Button = styled.button<ButtonTypes>`
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

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    color: ${(props) => props.theme[props.iconColor]};
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
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 640px) {
    p {
      display: none;
    }
  }
`
