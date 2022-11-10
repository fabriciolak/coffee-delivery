import { useContext, useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as Coffee from './styles'

import { CartItem } from './CartItem'
import { CoffeeContext } from '../../contexts/Coffee'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const orderValidationSchema = zod.object({
  cep: zod.string().min(6, { message: 'No mínimo 6 dígitos.' }),
  rua: zod.string().min(1),
  numero: zod.string().min(1),
  complemento: zod.string().min(1).optional(),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(1).max(2, { message: 'No máximo 2 dígitos.' }),
})

export type OrderSchemaType = zod.infer<typeof orderValidationSchema>

export function Checkout() {
  const {
    cart,
    totalProducts,
    handleConfirmOrder,
    setMethodPayment,
    methodPayment,
  } = useContext(CoffeeContext)

  const [selectPaymentMethod, setSelectPaymentMethod] = useState<
    'credit' | 'debit' | 'cash'
  >(methodPayment)

  function handlePaymentMethod(method: 'credit' | 'debit' | 'cash') {
    setSelectPaymentMethod(method)
    setMethodPayment(method)
  }

  const newOrder = useForm<OrderSchemaType>({
    resolver: zodResolver(orderValidationSchema),
    defaultValues: {
      uf: '',
      rua: '',
      cep: '',
      bairro: '',
      cidade: '',
      numero: '',
      complemento: '',
    },
  })

  const { register, handleSubmit, reset } = newOrder

  const navigate = useNavigate()

  function createNewOrder(data: OrderSchemaType) {
    handleConfirmOrder(data)

    navigate('/success')
    reset()
  }

  const productShipPrice = 3.5

  return (
    <Coffee.Container onSubmit={handleSubmit(createNewOrder)}>
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
              <input
                type="number"
                placeholder="CEP"
                maxLength={8}
                {...register('cep')}
              />
            </Coffee.Input>
            <Coffee.Input>
              <input type="text" placeholder="Rua" {...register('rua')} />
            </Coffee.Input>
            <div>
              <Coffee.Input size="12.5rem">
                <input
                  type="number"
                  placeholder="Número"
                  {...register('numero')}
                />
              </Coffee.Input>
              <Coffee.Input>
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
                <span>Opcional</span>
              </Coffee.Input>
            </div>
            <div>
              <Coffee.Input size="12.5rem">
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register('bairro')}
                />
              </Coffee.Input>
              <Coffee.Input>
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register('cidade')}
                />
              </Coffee.Input>
              <Coffee.Input size="3.75rem">
                <input
                  type="text"
                  placeholder="UF"
                  {...register('uf')}
                  maxLength={2}
                />
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
              <Coffee.PaymentMethodButton
                type="button"
                active={selectPaymentMethod === 'credit'}
                onClick={() => handlePaymentMethod('credit')}
              >
                <CreditCard color="#8047F8" size={16} weight="regular" />

                <span>Cartão de crédito</span>
              </Coffee.PaymentMethodButton>
              <Coffee.PaymentMethodButton
                type="button"
                active={selectPaymentMethod === 'debit'}
                onClick={() => handlePaymentMethod('debit')}
              >
                <Bank color="#8047F8" size={16} weight="regular" />

                <span>Cartão de débito</span>
              </Coffee.PaymentMethodButton>
              <Coffee.PaymentMethodButton
                type="button"
                active={selectPaymentMethod === 'cash'}
                onClick={() => handlePaymentMethod('cash')}
              >
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
          {cart &&
            cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
              />
            ))}
          <Coffee.List>
            <ul>
              <li>
                Total de itens
                <span>
                  R${' '}
                  {Intl.NumberFormat('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(totalProducts.total)}
                </span>
              </li>
              <li>
                Entrega
                <span>
                  R${' '}
                  {Intl.NumberFormat('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(productShipPrice)}
                </span>
              </li>
              <li>
                Total
                <span>
                  R${' '}
                  {Intl.NumberFormat('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(totalProducts.total + productShipPrice)}
                </span>
              </li>
            </ul>
          </Coffee.List>
          <Coffee.ConfirmButton type="submit">
            Confirmar Pedido
          </Coffee.ConfirmButton>
        </Coffee.Card>
      </aside>
    </Coffee.Container>
  )
}
