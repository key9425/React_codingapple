import { configureStore, createSlice } from "@reduxjs/toolkit";

// Redux store에 state 보관
// 1. createSlice( )로 state 생성 (createSlice( )는 useState( )와 용도가 비슷)
let user = createSlice({
  name: "user", // state이름
  initialState: "kim", // state값
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

// 2. configureStore( ) 안에 등록
export default configureStore({
  reducer: {
    user: user.reducer, // { 작명: createSlice생성state.reducer }
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
