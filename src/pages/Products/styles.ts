import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-flow: column;

  h2 {
    font: 800 2rem 'Baloo 2', sans-serif;
    margin: 2rem 0 3.375rem;
  }
`

export const ProductContent = styled.main`
  /* display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 5.875rem 8rem; */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  /* padding: 0 6rem; */
  gap: 2rem;
`
export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  margin: 1.25rem 1.5rem;

  span:first-child {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-left: 0;
    font: 400 0.875rem 'Roboto', sans-serif;
    gap: 0.25rem;
  }

  strong {
    font: 800 1.5rem 'Baloo 2', sans-serif;
  }
`
export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['base-button']};

  svg {
    padding: 0.75rem 0.5rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ProductCart = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0.75rem 0;
  }

  svg:nth-child(2) {
    margin-left: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['purple-dark']};
  }
`
