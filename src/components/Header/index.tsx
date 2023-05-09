import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

import logo from '../../assets/logo.svg'
import mark from '../../assets/mark.svg'
import cart from '../../assets/cart.svg'

import { HeaderCart, HeaderContainer, HeaderLocation } from './styles'

export function Header() {
  const { cartAmount } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logomarca" />
      </NavLink>
      <HeaderLocation>
        <img src={mark} alt="mark" />
        <small>Guaratinguetá, SP</small>
      </HeaderLocation>
      <HeaderCart>
        <NavLink to={cartAmount < 1 ? `/` : `/order`}>
          {cartAmount >= 1 && <span>{cartAmount}</span>}
          <img src={cart} alt="" />
        </NavLink>
      </HeaderCart>
    </HeaderContainer>
  )
}
