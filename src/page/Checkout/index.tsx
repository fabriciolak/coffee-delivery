import { FormEvent } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as Coffee from './styles'

import { CartItem } from './CartItem'

export function Checkout() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <Coffee.Container onSubmit={handleSubmit}>
      <aside>
        <Coffee.Title>Complete seu pedido</Coffee.Title>
        <Coffee.Card>
          <Coffee.Header>
            <MapPinLine color="#C47F17" size={22} weight="regular" />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Coffee.Header>

          <Coffee.Group>
            <Coffee.Input size="12.5rem">
              <input type="text" placeholder="CEP" />
            </Coffee.Input>
            <Coffee.Input>
              <input type="text" placeholder="Rua" />
            </Coffee.Input>
            <div>
              <Coffee.Input size="12.5rem">
                <input type="text" placeholder="Número" />
              </Coffee.Input>
              <Coffee.Input>
                <input type="text" placeholder="Complemento" />
                <span>Opcional</span>
              </Coffee.Input>
            </div>
            <div>
              <Coffee.Input size="12.5rem">
                <input type="text" placeholder="Bairro" />
              </Coffee.Input>
              <Coffee.Input>
                <input type="text" placeholder="Cidade" />
              </Coffee.Input>
              <Coffee.Input size="3.75rem">
                <input type="text" placeholder="UF" />
              </Coffee.Input>
            </div>
          </Coffee.Group>
        </Coffee.Card>

        <Coffee.Card>
          <Coffee.Header>
            <CurrencyDollar color="#8047F8" size={22} weight="regular" />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Coffee.Header>
          <Coffee.Group>
            <div>
              <Coffee.PaymentMethodButton>
                <CreditCard color="#8047F8" size={16} weight="regular" />

                <span>Cartão de crédito</span>
              </Coffee.PaymentMethodButton>
              <Coffee.PaymentMethodButton>
                <Bank color="#8047F8" size={16} weight="regular" />

                <span>Cartão de débito</span>
              </Coffee.PaymentMethodButton>
              <Coffee.PaymentMethodButton>
                <Money color="#8047F8" size={16} weight="regular" />

                <span>Dinheiro</span>
              </Coffee.PaymentMethodButton>
            </div>
          </Coffee.Group>
        </Coffee.Card>
      </aside>
      <aside>
        <Coffee.Title>Cafés selecionados</Coffee.Title>
        <Coffee.Card>
          <CartItem
            name="Expresso Tradicional"
            price={9.91}
            quantity={1}
            image={''}
          />
          <CartItem
            name="Expresso Tradicional"
            price={9.91}
            quantity={1}
            image={''}
          />
          <Coffee.List>
            <ul>
              <li>
                Total de itens
                <span>R$ 29,70</span>
              </li>
              <li>
                Entrega
                <span>R$ 3,50</span>
              </li>
              <li>
                Total
                <span>R$ 33,20</span>
              </li>
            </ul>
          </Coffee.List>
          <Coffee.ConfirmButton>Confirmar Pedido</Coffee.ConfirmButton>
        </Coffee.Card>
      </aside>
    </Coffee.Container>
  )
}
