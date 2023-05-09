import { Trash } from 'phosphor-react'
import { InputAmount } from '../../../components/InputAmount'
import { CartCoffee } from '../styles'
import { ProductCoffee } from '../../../context/CartContext'
import { formatCurrency } from '../../../utils/formatCurrency'
import { useCart } from '../../../hooks/useCart'

interface CoffeeItemProps {
  coffeeItem: ProductCoffee
}

export function CartItemCoffee({ coffeeItem }: CoffeeItemProps) {
  const { updateCoffeeAmount, removeCoffeeInCart } = useCart()

  const currencyTotal = coffeeItem.price * coffeeItem.amount
  const currency = formatCurrency(currencyTotal)

  function updateAddCoffee() {
    updateCoffeeAmount(coffeeItem.id, 'add')
  }

  function updateRemoveCoffee() {
    updateCoffeeAmount(coffeeItem.id, 'remove')
  }

  function removeCoffee() {
    removeCoffeeInCart(coffeeItem.id)
  }

  return (
    <>
      <CartCoffee>
        <img src={coffeeItem.image} alt="coffee" />
        <div className="inputAmount">
          <span>{coffeeItem.title}</span>
          <div>
            <InputAmount
              amount={coffeeItem.amount}
              onAddAmount={updateAddCoffee}
              onRemoveAmount={updateRemoveCoffee}
              size="small"
            />
            <button onClick={removeCoffee}>
              <Trash size={16} />
              remover
            </button>
          </div>
        </div>
        <p>R${currency}</p>
      </CartCoffee>
    </>
  )
}
