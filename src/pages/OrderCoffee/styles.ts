import styled from 'styled-components'

// import { NavLink as ButtonNav } from 'react-router-dom'

import * as RadioGroup from '@radix-ui/react-radio-group'

export const OrderCoffeeContainer = styled.form`
  display: grid;
  grid-template-columns: minmax(740px, 1fr) 1fr;
  gap: 2rem;
`

export const OrderCoffeeContent = styled.div`
  display: flex;
  flex-flow: column;
  /* padding: 2rem 3rem 0 2rem; */

  h2 {
    font: 700 1.125rem 'Baloo 2';
    margin-bottom: 0.9375rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const OrderCoffeeForm = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 2.5rem;
  /* gap: 2rem; */
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;

  .mapPinLine {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  div {
    width: 100%;
  }

  p {
    font: 400 1rem 'Roboto';
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font: 400 0.875rem 'Roboto';
    color: ${(props) => props.theme['base-text']};
    margin: 0.5rem 0 2rem 1.875rem;
  }

  input {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 0.25rem;
    height: 2.625rem;
    margin-bottom: 1rem;
    padding: 12px;

    &:focus {
      outline: 1px solid ${(props) => props.theme['yellow-medium']};
    }
  }

  #cep {
    width: 150px;
  }

  #street {
    width: 100%;
  }

  .number {
    display: grid;
    grid-template-columns: 150px auto;
    align-items: center;
    gap: 0.5rem;
    position: relative;

    #complement:not(:placeholder-shown) + label {
      opacity: 0;
    }

    label {
      position: absolute;
      display: flex;
      top: 0.8rem;
      right: 1rem;
      align-items: center;

      text-transform: capitalize;
      font: italic 400 0.75rem 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-label']};
      transition: 0.5s;
    }
  }

  .city {
    display: grid;
    grid-template-columns: 150px auto 45px;
    gap: 0.5rem;
    /* background: red; */
  }
`
export const OrderCoffeePayment = styled.div`
  display: flex;
  flex-flow: column;
  background: ${(props) => props.theme['base-card']};
  margin-top: 12px;
  border-radius: 0.375rem;
  padding: 2.5rem;

  .currency {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['purple-medium']};
    }

    p {
      font: 400 1rem 'Roboto';
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  span {
    font: 400 0.875rem 'Roboto';
    color: ${(props) => props.theme['base-text']};
    margin: 0.5rem 0 2rem 1.875rem;
  }
`
export const PaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`
export const PaymentTypeButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 400 0.75rem 'Roboto';
  padding: 1rem 0.2rem;
  border: 0;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  gap: 0.75rem;

  &[data-state='checked'] {
    outline: 1px solid ${(props) => props.theme['purple-medium']};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme['purple-medium']};
  }
`

export const CartItems = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 2.5rem;
  /* gap: 2rem; */
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;
`
export const CartCoffee = styled.div`
  display: flex;
  width: 100%;
  gap: 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  .inputAmount {
    display: flex;
    flex-flow: column;
    gap: 0.3rem;

    span {
      font: 400 1rem 'Roboto', sans-srif;
    }

    div {
      display: flex;
      gap: 0.5rem;
    }

    button:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 0.375rem;
      padding: 0 1rem;
      gap: 0.25rem;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};

      font: 400 0.75rem 'Roboto', sans-serif;
      text-transform: uppercase;

      svg {
        color: ${(props) => props.theme['purple-medium']};
      }
    }
  }
`
export const CartItemCoffeeFooter = styled.footer`
  display: flex;
  flex-flow: column;
  width: 100%;

  p {
    display: flex;
    font: 400 0.875rem 'Roboto', sans-srif;
    color: ${(props) => props.theme['base-text']};

    margin-bottom: 0.843rem;

    :nth-child(3) {
      font: 700 1.25rem 'Roboto', sans-srif;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  span {
    display: flex;
    margin-left: auto;
    font: 400 1rem 'Roboto', sans-srif;
    color: ${(props) => props.theme['base-text']};
  }

  p .total {
    font: 700 1.25rem 'Roboto', sans-srif;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: ${(props) => props.theme['yellow-medium']};
  color: ${(props) => props.theme.white};
  font: 700 0.875rem 'Roboto', sans-srif;

  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;
  border-radius: 0.375rem;

  &:disabled {
    /* background: red; */
    cursor: not-allowed;
  }
`
