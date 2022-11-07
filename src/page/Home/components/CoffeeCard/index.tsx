import { Link } from 'react-router-dom'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeeCartButton,
  CoffeeContainer,
  CoffeeContent,
  CoffeeFooter,
  CoffeeOrderButton,
  CoffeeTag,
} from './styles'

interface CoffeeCardProps {
  name: string
  description: string
  image: string
  price: string | number
  tags: string[]
}

interface DataCoffee {
  data: CoffeeCardProps
}

export function CoffeeCard({ data }: DataCoffee) {
  return (
    <CoffeeContainer>
      <img src={data.image} alt="" width={120} />
      <CoffeeTag>
        {data.tags.map((tag) => (
          <span key={crypto.randomUUID()}>{tag}</span>
        ))}
      </CoffeeTag>

      <CoffeeContent>
        <strong>{data.name}</strong>
        <p>{data.description}</p>
      </CoffeeContent>

      <CoffeeFooter>
        <p>
          <span>R$</span> {data.price}
        </p>
        <div>
          <CoffeeOrderButton>
            <button>
              <Minus size={14} weight="fill" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="fill" />
            </button>
          </CoffeeOrderButton>
          <CoffeeCartButton fill="purple-dark" iconColor="yellow-dark">
            <Link to="/checkout">
              <ShoppingCart color="#F3F2F2" size={22} weight="fill" />
            </Link>
            {/* <span className="button-legend">1</span> */}
          </CoffeeCartButton>
        </div>
      </CoffeeFooter>
    </CoffeeContainer>
  )
}
