import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ProductState = {
  id:any;
  title:string;
  banner:string;
  price:number;
  bodyHtml?:string;
  vendor?:string;
  productType?:string;
  createdAt?:string;
  updatedAt?:string;
  publishedAt?:string;
  tags?:string;
  status?:string;
};

const getInitialProductState = (): ProductState => {
  const storedState = localStorage.getItem("productState");
  if (storedState) {
    return JSON.parse(storedState) as ProductState;
  }
  return {
    id:0,
    title:"",
    bodyHtml:"",
    vendor:"",
    productType:"",
    banner:"",
    price:0,
  };
};

const initialState: ProductState = getInitialProductState();

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductItems: (state, action: PayloadAction<ProductState>) => {
      const newState = { ...state, ...action.payload };
      localStorage.setItem("productState", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { setProductItems } = productSlice.actions;
export const productSelector = (state: RootState) => state.product;
export default productSlice.reducer;
