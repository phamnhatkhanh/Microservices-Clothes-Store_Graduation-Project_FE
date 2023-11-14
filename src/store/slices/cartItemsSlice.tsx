import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItemsType = {
  id: number,
  title: string;
  size: string | number;
  banner?: string;
  price?: number;
  quantity?: number;
  
        
};

type RemoveCart = CartItemsType & {
  removeAll: boolean;
};
type ResetCart = {
  removeAll: boolean;
};

const initialState: CartItemsType[] = [];

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItemsType>) => {
      const { id, size } = action.payload;
      const itemToUpdate = state.find(
        (item) => item.id === id && item.size === size
      );
      if (itemToUpdate && itemToUpdate.quantity) {
        itemToUpdate.quantity += 1;
      } else {
        state.push(action.payload);
      }
    },
    decrementCartItem : (state, action: PayloadAction<CartItemsType>) => {
      const { id, size } = action.payload;
      const itemToDelete = state.find(
        (item) => item.id === id && item.size === size
      );
      if (itemToDelete && itemToDelete.quantity) {
        const index = state.indexOf(itemToDelete);
        if (index !== -1) {
           itemToDelete.quantity === 1
            ? state.splice(index, 1)
            : (itemToDelete.quantity -= 1);
        }
      }
    },
    removeCartItem: (state, action: PayloadAction<RemoveCart>) => {
      const { id, size, removeAll } = action.payload;
      const itemToDelete = state.find(
        (item) => item.id === id && item.size === size
      );
      if (itemToDelete && itemToDelete.quantity) {
        const index = state.indexOf(itemToDelete);
        if (index !== -1) {
          removeAll || itemToDelete.quantity === 1
            ? state.splice(index, 1)
            : (itemToDelete.quantity -= 1);
        }
      }
    },
    setCartItem: (_, action: PayloadAction<CartItemsType[]>) => {
      return action.payload;
    }

  },
});

export const { addCartItem, removeCartItem, setCartItem, decrementCartItem } =
  cartItemsSlice.actions;
export const cartItemsSelector = (state: RootState) => state.cartItems;
export default cartItemsSlice.reducer;
