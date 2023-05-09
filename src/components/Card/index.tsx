import { ShoppingCartSimple } from 'phosphor-react'

import { CardBuy, CardContainer, CardShoppinpCart } from './styles'
import { useCart } from '../../hooks/useCart'
import { InputAmount } from '../InputAmount'
import { useState } from 'react'
import { formatCurrency } from '../../utils/formatCurrency'

export interface CoffeeItems {
  id: number
  image: string
  tag: Array<string>
  title: string
  description: string
  price: number
}

interface CoffeeProps {
  coffee: CoffeeItems
}

export function Card({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart()
  const [amount, setAmount] = useState(1)

  const currency = formatCurrency(coffee.price)

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      amount,
    }

    addCoffeeToCart(coffeeToAdd)
  }

  function addAmount() {
    setAmount((state) => state + 1)
  }

  function removeAmount() {
    setAmount((state) => state - 1)
  }

  return (
    <CardContainer key={coffee.id}>
      <img src={coffee.image} alt="" />
      <small>
        {coffee.tag.map((tags) => {
          return <p key={tags}>{tags}</p>
        })}
      </small>
      <title>{coffee.title}</title>
      <p>{coffee.description}</p>
      <CardBuy>
        <span>
          R$<strong>{currency}</strong>
        </span>
        <CardShoppinpCart>
          <InputAmount
            onAddAmount={addAmount}
            onRemoveAmount={removeAmount}
            amount={amount}
            size="medium"
          />
          <button>
            <ShoppingCartSimple
              size={22}
              weight="fill"
              color="white"
              className="cartIcon"
              onClick={handleAddToCart}
            />
          </button>
        </CardShoppinpCart>
      </CardBuy>
    </CardContainer>
  )
}
