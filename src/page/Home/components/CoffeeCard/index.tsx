import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'

import {
  CoffeeCartButton,
  CoffeeContainer,
  CoffeeContent,
  CoffeeFooter,
  CoffeeOrderButton,
  CoffeeTag,
} from './styles'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/Coffee'

interface CoffeeCardProps {
  id: string
  name: string
  description: string
  image: string
  price: number
  tags: string[]
}

interface DataCoffee {
  data: CoffeeCardProps
}

export function CoffeeCard({ data }: DataCoffee) {
  const { incrementProduct, decrementProduct, addToCart, cart } =
    useContext(CoffeeContext)

  const productCartExists = cart && cart.find((item) => item.id === data.id)

  const [amount, setAmount] = useState(
    (productCartExists && productCartExists.quantity) || 1,
  )

  function handleUpdateProductAmount(type: 'add' | 'remove') {
    if (type === 'remove') {
      if (amount <= 1) return

      setAmount(amount - 1)
      if (productCartExists) decrementProduct(data.id)
    } else {
      setAmount(amount + 1)
      console.log('click')

      if (productCartExists) incrementProduct(data.id)
    }
  }

  function handleAddProduct() {
    addToCart({
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      quantity: amount,
    })
  }

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
          <span>R$</span>{' '}
          {Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(data.price)}
        </p>
        <div>
          <CoffeeOrderButton>
            <button onClick={() => handleUpdateProductAmount('remove')}>
              <Minus size={14} weight="fill" />
            </button>
            <span>{amount}</span>
            <button onClick={() => handleUpdateProductAmount('add')}>
              <Plus size={14} weight="fill" />
            </button>
          </CoffeeOrderButton>

          <CoffeeCartButton fill="purple-dark" onClick={handleAddProduct}>
            <ShoppingCart color="#F3F2F2" size={22} weight="fill" />
            {productCartExists && productCartExists.quantity > 0 && (
              <span className="button-legend">{amount}</span>
            )}
          </CoffeeCartButton>
        </div>
      </CoffeeFooter>
    </CoffeeContainer>
  )
}
