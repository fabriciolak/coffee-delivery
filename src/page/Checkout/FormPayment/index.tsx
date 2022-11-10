import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as Coffee from './styles'

export function FormPayment() {
  return (
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
            <input type="number" placeholder="CEP" />
          </Coffee.Input>
          <Coffee.Input>
            <input type="text" placeholder="Rua" />
          </Coffee.Input>
          <div>
            <Coffee.Input size="12.5rem">
              <input type="number" placeholder="Número" />
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
            <Coffee.PaymentMethodButton type="button">
              <CreditCard color="#8047F8" size={16} weight="regular" />

              <span>Cartão de crédito</span>
            </Coffee.PaymentMethodButton>
            <Coffee.PaymentMethodButton type="button">
              <Bank color="#8047F8" size={16} weight="regular" />

              <span>Cartão de débito</span>
            </Coffee.PaymentMethodButton>
            <Coffee.PaymentMethodButton type="button">
              <Money color="#8047F8" size={16} weight="regular" />

              <span>Dinheiro</span>
            </Coffee.PaymentMethodButton>
          </div>
        </Coffee.Group>
      </Coffee.Card>
    </aside>
  )
}
