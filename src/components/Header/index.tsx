import { MapPin, ShoppingCart } from 'phosphor-react'

import { Button, NavContainer, HeaderContainer } from './styles'

import coffeeDeliveryLogo from '../../assets/coffeeDeliveryLogo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/" aria-label="Home">
        <img src={coffeeDeliveryLogo} alt="" />
      </Link>
      <NavContainer>
        <Button fill="purple-light" iconColor="purple">
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </Button>
        <Button fill="yellow-light" iconColor="yellow-dark">
          <Link to="/checkout" aria-label="Checkout page">
            <ShoppingCart size={22} weight="fill" />
          </Link>
          {/* <span className="button-legend">3</span> */}
        </Button>
      </NavContainer>
    </HeaderContainer>
  )
}
