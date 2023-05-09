import { ReactNode, createContext, useState } from 'react'
import { CoffeeItems } from '../components/Card'
import produce from 'immer'

// console.log(Coffee)

export interface ProductCoffee extends CoffeeItems {
  amount: number
}

interface CartContextType {
  coffee: ProductCoffee[]
  addCoffeeToCart: (coffeeItem: ProductCoffee) => void
  cartAmount: number
  updateCoffeeAmount: (coffeeId: number, type: 'add' | 'remove') => void
  removeCoffeeInCart: (coffeeId: number) => void
  cartCoffeeTotal: number
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}
export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffee, setCoffee] = useState<ProductCoffee[]>([])

  const cartAmount = coffee.length

  // useEffect(() => {
  //   const stateJSON = JSON.stringify(coffee)

  //   localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', stateJSON)
  // }, [coffee])

  const cartCoffeeTotal = coffee.reduce((total, coffeeItem) => {
    return total + coffeeItem.price * coffeeItem.amount
  }, 0)

  function addCoffeeToCart(coffeeItem: ProductCoffee) {
    const coffeeAlreadyExistsInCart = coffee.findIndex(
      (cartItem) => cartItem.id === coffeeItem.id,
    )

    const newCart = produce(coffee, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffeeItem)
      } else {
        draft[coffeeAlreadyExistsInCart].amount += coffeeItem.amount
      }
    })

    setCoffee(newCart)
  }

  function updateCoffeeAmount(coffeeId: number, type: 'add' | 'remove') {
    const newCart = produce(coffee, (draft) => {
      const coffeeExistInCart = coffee.findIndex(
        (coffeeItem) => coffeeItem.id === coffeeId,
      )

      if (coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart]
        draft[coffeeExistInCart].amount =
          type === 'add' ? item.amount + 1 : item.amount - 1
      }
    })

    setCoffee(newCart)
  }

  function removeCoffeeInCart(coffeeId: number) {
    const newCart = produce(coffee, (draft) => {
      const coffeeExistInCart = coffee.findIndex(
        (coffeeItem) => coffeeItem.id === coffeeId,
      )

      if (coffeeExistInCart >= 0) {
        draft.splice(coffeeExistInCart, 1)
      }
    })

    setCoffee(newCart)
  }

  function cleanCart() {
    setCoffee([])
  }

  // console.log(coffee)
  return (
    <CartContext.Provider
      value={{
        coffee,
        addCoffeeToCart,
        cartAmount,
        updateCoffeeAmount,
        removeCoffeeInCart,
        cartCoffeeTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
