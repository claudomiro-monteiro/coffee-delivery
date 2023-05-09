import styled from 'styled-components'

interface CardCounterProps {
  size: 'small' | 'medium'
}

export const CardCounter = styled.div<CardCounterProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    width: ${(props) => (props.size === 'medium' ? `100%` : `1.5rem`)};
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
