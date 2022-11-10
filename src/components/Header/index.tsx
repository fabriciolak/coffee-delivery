import { MapPin, ShoppingCart } from 'phosphor-react'

import { Button, NavContainer, HeaderContainer } from './styles'

import coffeeDeliveryLogo from '../../assets/coffeeDeliveryLogo.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/Coffee'

export function Header() {
  const { cart } = useContext(CoffeeContext)

  const quantity = cart.reduce((acc, cur) => acc + cur.quantity, 0)

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

          {quantity ? <span className="button-legend">{quantity}</span> : ''}
        </Button>
      </NavContainer>
    </HeaderContainer>
  )
}
