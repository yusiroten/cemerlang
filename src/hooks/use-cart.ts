
"use client"

import * as React from "react"
import type { Product } from '@/lib/data';

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartStateContext = React.createContext<CartState | undefined>(undefined);
const CartDispatchContext = React.createContext<React.Dispatch<CartAction> | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: [...state.items, { product: action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload.productId),
      };
    }
    case 'UPDATE_QUANTITY': {
        if (action.payload.quantity < 1) {
             return {
                ...state,
                items: state.items.filter((item) => item.product.id !== action.payload.productId),
            };
        }
        return {
            ...state,
            items: state.items.map((item) =>
            item.product.id === action.payload.productId
                ? { ...item, quantity: action.payload.quantity }
                : item
            ),
        };
    }
    case 'CLEAR_CART': {
        return { ...state, items: [] };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, { items: [] });

  return React.createElement(
    CartStateContext.Provider,
    { value: state },
    React.createElement(
      CartDispatchContext.Provider,
      { value: dispatch },
      children
    )
  );
};

export const useCartState = () => {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
};

export const useCartDispatch = () => {
  const context = React.useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
};

export const useCart = () => {
    return { state: useCartState(), dispatch: useCartDispatch() };
}
