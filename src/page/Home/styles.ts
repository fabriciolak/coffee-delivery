import styled from 'styled-components'
import { DefaultThemeType } from '../../styles/theme/default'

export const HomeContainer = styled.section`
  position: relative;
  margin-top: 0px;
`

export const HomeBackground = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;

  filter: blur(80px);

  img {
    width: 100%;
  }
`

export const HomeContentGrid = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 94px 1rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 36.75rem 1fr;
  gap: 3.5rem;

  div {
    h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 3rem;
      line-height: 1.3;

      color: ${({ theme }) => theme['base-title']};
    }

    p {
      margin-top: 1rem;

      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }

  img {
    width: 100%;
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(31rem, 1fr));

    div {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        text-align: center;
      }
    }

    ul {
      justify-content: center;
    }

    img {
      max-width: 35rem;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;

    img {
      max-width: 35rem;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;

    img {
      max-width: 35rem;
    }
  }

  @media (max-width: 596px) {
    grid-template-columns: 1fr;

    div {
      width: 100%;

      h1 {
        text-align: left;
      }
    }

    ul {
      justify-content: flex-start;
    }

    img {
      max-width: 35rem;
    }
  }
`

export const HomeFooterItems = styled.ul`
  margin-top: 4.125rem;

  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;
`

interface FooterItemProps {
  width?: string
  color: DefaultThemeType
}

export const FooterItem = styled.li<FooterItemProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.white};
    background-color: ${({ theme, color }) => theme[color]};
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const SectionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 1rem;

  margin: 8.75rem auto 0px;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 54px;
  }
`

export const SectionContentGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2.5rem 2rem;
`
