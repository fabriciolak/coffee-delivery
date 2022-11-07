import { Minus, Plus, Trash } from 'phosphor-react'
import {
  Cart,
  CartContent,
  CartInfo,
  CartOrderButton,
  CartRemoveButton,
} from './styles'

interface CartItemProps {
  name: string
  image: string
  price: number
  quantity: string | number
}

export function CartItem({ name, image, price, quantity }: CartItemProps) {
  return (
    <Cart>
      <CartContent>
        <img
          src="https://s3-alpha-sig.figma.com/img/bcfa/72ad/62a8600eeded092c17fd14240624545e?Expires=1668384000&Signature=atITYlomvBILB5NMZVbyKf1fRk5kR2JGxHL845X3ECGrvlQCUaFQlq4BOYqRqclL0w1uzl2OdPLE6oaqDRsEsd0UV9T40J1X~nUjOZcOCYOO2eSQsnyh12c9MG7jK-wOAB0oW3szJ2-X2ZQdbkcLKgMoQizje4AyZ3vDuJDkj9rN5QkEQlxJtQHLaluUbBTsthmOlhS1~7MOjb5NFagpIfgRa67lQEeJVioSX39zE4ep4LI4ncSH2FwzgniJsRdgtxDq0L9pt9GCLdyhuGVCIbQDZmSdrpf9EeYZUbrW6KfN220Erjaulnuuj76c26At-QGmE4GBGzKRM7~g2hkMEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <CartInfo>
          <strong>{name}</strong>
          <div>
            <CartOrderButton>
              <button>
                <Minus color="#8047F8" size={14} weight="regular" />
              </button>
              <span>{quantity}</span>
              <button>
                <Plus color="#8047F8" size={14} weight="regular" />
              </button>
            </CartOrderButton>
            <CartRemoveButton>
              <Trash color="#8047F8" size={16} weight="regular" />
              <span>REMOVER</span>
            </CartRemoveButton>
          </div>
        </CartInfo>
      </CartContent>
      <strong>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </strong>
    </Cart>
  )
}
