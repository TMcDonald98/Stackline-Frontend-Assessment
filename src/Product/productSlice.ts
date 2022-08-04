import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Store/store';
interface ProductState {
  id: string,
  title: string,
  image: string,
  subtitle: string,
  brand: string,
  reviews: {
    customer: string,
    review: string,
    score: number
  }[],
  retailer: string,
  details: string[],
  tags: string[],
  sales: {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
  }[]

}

const initialState: {data: Partial<ProductState>, loading: boolean }  = {
    data: {},
    loading: true
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<object>) => {
        state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
    }
  }
})

export const { setProduct, setLoading } = productSlice.actions

export const selectData = (state: RootState) => state.product.data
export const selectLoading = (state: RootState) => state.product.loading


export default productSlice.reducer
