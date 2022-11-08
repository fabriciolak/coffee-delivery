export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_TO_CART = 'REMOVE_TO_CART',
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = 'DECREMENT_PRODUCT',
}

export function incrementProductCartAction(id: string) {
  return {
    type: ActionType.INCREMENT_PRODUCT,
    payload: id,
  }
}

export function decrementProductCartAction(id: string) {
  return {
    type: ActionType.DECREMENT_PRODUCT,
    payload: id,
  }
}
