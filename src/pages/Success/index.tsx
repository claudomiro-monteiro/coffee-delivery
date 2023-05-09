import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import ilustration from '../../assets/Illustration.svg'

import { Border, OrderInfo, SuccessContainer, SuccessContent } from './styles'
import { useLocation } from 'react-router-dom'

interface stateType {
  state: {
    cep: string
    city: string
    complement: string
    neighborhood: string
    number: string
    payment: string
    street: string
    uf: string
  }
}

export function Success() {
  const { state } = useLocation() as unknown as stateType
  console.log(state)

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <SuccessContent>
        <Border>
          <OrderInfo iconBg="#8047F8">
            <div>
              <MapPin size={16} weight="fill" color="#fff" />
            </div>
            <p>
              Entrega em{' '}
              <strong>
                {state.street}, {state.number}
              </strong>
              <br />
              {state.neighborhood} - {state.city}, {state.uf}
            </p>
          </OrderInfo>
          <OrderInfo iconBg="#DBAC2C">
            <div>
              <Timer size={16} weight="fill" color="#fff" />
            </div>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30min</strong>
            </p>
          </OrderInfo>
          <OrderInfo iconBg="#C47F17">
            <div>
              <CurrencyDollar size={16} weight="fill" color="#fff" />
            </div>
            <p>
              Pagamento na entrega
              <br />
              <strong>{state.payment}</strong>
            </p>
          </OrderInfo>
        </Border>
        <img src={ilustration} alt="ilustration" />
      </SuccessContent>
    </SuccessContainer>
  )
}
