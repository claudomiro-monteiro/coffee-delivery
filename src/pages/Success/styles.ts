import styled from 'styled-components'

interface iconBgProps {
  iconBg: string
}

export const SuccessContainer = styled.div`
  display: flex;
  flex-flow: column;

  h1 {
    font: 800 2rem 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font: 400 1.25rem 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }
`
export const SuccessContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 492px);
  justify-content: space-between;
  align-items: center;
`
export const Border = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-background']};
  border-radius: 6px 36px;
  width: 526px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

export const OrderInfo = styled.div<iconBgProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:nth-child(1),
  :nth-child(2) {
    margin-bottom: 2rem;
  }

  div {
    height: 2rem;
    width: 2rem;
    background: ${({ iconBg }) => iconBg};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
