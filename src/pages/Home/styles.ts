import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.875rem 0;
  gap: 3.5rem;
`

export const HomeContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;

  h1 {
    font: 800 3rem/3.875rem 'Baloo 2', sans serif;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
  }
`

export const HomeTextSmall = styled.div`
  display: flex;
  margin-top: 4.125rem;
  gap: 2.5rem;
`

const HomeText = styled.div`
  display: flex;
  flex-flow: column;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    gap: 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    /* background: ${(props) => props.theme['yellow-dark']}; */
    border-radius: 50%;

    /* svg {
      color: ${(props) => props.theme['base-background']};
      padding: 0.9rem;
      border-radius: 25px;
      gap: 0.5rem;
    } */
  }
`

export const HomeTextLeft = styled(HomeText)`
  div:nth-child(1) {
    span {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  div:nth-child(2) {
    span {
      /* display: flex; */
      background: ${(props) => props.theme['yellow-medium']};
    }
  }
`

export const HomeTextRight = styled(HomeText)`
  div:nth-child(1) {
    span {
      background: ${(props) => props.theme['base-text']};
    }
  }

  div:nth-child(2) {
    span {
      background: ${(props) => props.theme['purple-medium']};
    }
  }
`
