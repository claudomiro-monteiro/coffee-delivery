import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-card']};

  border-radius: 0.375rem 2.25rem;

  img {
    position: absolute;
    top: -1.25rem;
  }

  small {
    margin: 7rem 0 1rem;
    display: flex;
    /* justify-content: center; */

    p {
      font: 700 0.625rem 'Roboto', sans-serif;
      text-transform: uppercase;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      margin: 0 0.2rem;
      padding: 0.25rem 0.5rem;
      border-radius: 6.25rem;
    }
  }

  title {
    display: flex;
    font: 700 1.25rem 'Baloo 2', sans-serif;
    text-align: center;
    margin: 0 1.25rem;
  }

  p {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0.5rem 1.25rem;
    font: 400 0.875rem 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-label']};
  }
`
export const CardBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem 1.5rem 1.25rem;
  gap: 1.4rem;

  span {
    display: flex;
    align-items: center;
    font: 400 0.875rem 'Roboto', sans-serif;
  }

  strong {
    margin-left: 0.3rem;
    font: 800 1.5rem 'Baloo 2', sans-serif;
  }
  /* background: gray; */
`
export const CardShoppinpCart = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: none;
    background: ${(props) => props.theme['purple-dark']};
    border-radius: 0.375rem;

    svg.cartIcon {
      margin: 0.5rem;
      /* background: red; */
    }
  }
`
export const CardCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  /* gap: 0.2rem; */

  background: ${(props) => props.theme['base-button']};

  p {
    font: 400 1rem 'Roboto', sans-serif;
    margin: 0 0.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  input {
    width: 2rem;
    border: none;
    background: transparent;
    text-align: center;

    &:focus {
      border: none;
      outline: 0;
    }
  }

  button {
    border: 0;
    outline: none;
    background: transparent;
  }

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }
`
