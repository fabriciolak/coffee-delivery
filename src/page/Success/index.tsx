import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import * as S from './styles'

import successOrder from '../../assets/success-order.png'

export function Success() {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                  <strong>Cartão de Crédito</strong>
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
