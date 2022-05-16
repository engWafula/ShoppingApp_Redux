import { configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import notificationSlice from "./notificationSlice";


const store =configureStore({
  reducer:{
      auth:authSlice,
      cart:cartSlice,
      notification:notificationSlice
  }
})


export default store