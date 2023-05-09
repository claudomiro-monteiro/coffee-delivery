import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffee from '../../assets/coffee.svg'
import {
  HomeContainer,
  HomeContent,
  HomeTextLeft,
  HomeTextRight,
  HomeTextSmall,
} from './styles'
import { Products } from '../Products'

export function Home() {
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <HomeTextSmall>
            <HomeTextLeft>
              <div>
                <span>
                  <ShoppingCart size={16} color="white" weight="fill" />
                </span>
                Compra simples e segura
              </div>
              <div>
                <span>
                  <Timer size={32} color="white" weight="fill" />
                </span>
                Entrega rápida e rastreada
              </div>
            </HomeTextLeft>
            <HomeTextRight>
              <div>
                <span>
                  <Package size={32} color="white" weight="fill" />
                </span>
                Embalagem manté o café intacto
              </div>
              <div>
                <span>
                  <Coffee size={32} color="white" weight="fill" />
                </span>
                O café chega fresquinho até você
              </div>
            </HomeTextRight>
          </HomeTextSmall>
        </HomeContent>
        <img src={coffee} alt="Coffee" />
      </HomeContainer>
      <Products />
    </>
  )
}
