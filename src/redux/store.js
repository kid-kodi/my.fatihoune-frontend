import { configureStore } from "@reduxjs/toolkit";
import basketReducers from "./slices/basketSlice";

export default configureStore({
  reducer: { basket: basketReducers },
});
