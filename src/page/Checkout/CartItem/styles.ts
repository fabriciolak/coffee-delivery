import styled from 'styled-components'

export const Cart = styled.div`
  width: 100%;

  padding: 4px 8px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-bottom: 24px;
  margin-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  @media (max-width: 504px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`

export const CartContent = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 504px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;
  }
`

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    gap: 8px;
  }

  @media (max-width: 504px) {
    width: 100%;
  }
`

export const CartOrderButton = styled.div`
  width: 4.5rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};

  button {
    width: 0.875rem;
    height: 0.875rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const CartRemoveButton = styled.button`
  width: 5.6875rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-size: 0.75rem;
  line-height: 1.6;

  text-transform: uppercase;

  border: none;
  border-radius: 6px;
  outline: none;
  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};

  cursor: pointer;

  @media (max-width: 504px) {
    flex: 1;
  }
`
