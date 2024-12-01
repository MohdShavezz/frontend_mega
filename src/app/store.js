import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/booksSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    user:userReducer,
  },
  devTools: true 
});

export default store;
