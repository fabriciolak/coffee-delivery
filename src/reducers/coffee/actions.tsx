import { CoffeeData } from './reducer'

export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_TO_CART = 'REMOVE_TO_CART',
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = 'DECREMENT_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
}

export function incrementProductCartAction(id: string) {
  return {
    type: ActionType.INCREMENT_PRODUCT,
    payload: { id },
  }
}

export function decrementProductCartAction(id: string) {
  return {
    type: ActionType.DECREMENT_PRODUCT,
    payload: { id },
  }
}

export function addProductCartAction(product: CoffeeData) {
  return {
    type: ActionType.ADD_TO_CART,
    payload: { product },
  }
}

export function removeProductCartAction(id: string) {
  return {
    type: ActionType.REMOVE_TO_CART,
    payload: { id },
  }
}

export function clearCartAction() {
  return {
    type: ActionType.CLEAR_CART,
  }
}
