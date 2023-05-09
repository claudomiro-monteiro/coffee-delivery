import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  z-index: 5;

  background: ${(props) => props.theme['base-background']};
`
export const HeaderLocation = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  background: ${(props) => props.theme['purple-light']};
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  gap: 0.25rem;
  color: ${(props) => props.theme['purple-dark']};
`

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border: 0;
  border-radius: 0.375rem;
  margin-left: 0.75rem;
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-dark']};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
