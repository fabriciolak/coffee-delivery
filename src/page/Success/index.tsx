import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import * as S from './styles'

import successOrder from '../../assets/success-order.png'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/Coffee'

export function Success() {
  const { confirmOrder } = useContext(CoffeeContext)

  const paymentMethod = (method: 'credit' | 'debit' | 'cash') => {
    if (method === 'cash') return 'Dinheiro'
    if (method === 'credit') return 'Cartão de crédito'
    if (method === 'debit') return 'Cartão de débito'

    return 'hmm..'
  }

  return (
    <S.Container>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <S.AddressBox>
          <ul>
            <li>
              <S.Icon color="purple">
                <MapPin size={16} weight="fill" />
              </S.Icon>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {confirmOrder.rua}, {confirmOrder.numero}
                  </strong>
                </p>
                <p>
                  {confirmOrder.bairro} - {confirmOrder.cidade},{' '}
                  {confirmOrder.uf}
                </p>
              </div>
            </li>

            <li>
              <S.Icon color="yellow">
                <Timer size={16} weight="fill" />
              </S.Icon>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </li>

            <li>
              <S.Icon color="yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </S.Icon>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{paymentMethod(confirmOrder.method)}</strong>
                </p>
              </div>
            </li>
          </ul>
        </S.AddressBox>
      </div>
      <div className="image">
        <img src={successOrder} alt="" />
      </div>
    </S.Container>
  )
}
