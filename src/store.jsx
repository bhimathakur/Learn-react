import { configureStore } from "@reduxjs/toolkit";
import adoptedPetSlice from "./adoptedPetSlice";
import searchParams from "./searchParamsSlice";
import { petApi } from "./petApiService"; // import service



const store = configureStore({
  reducer: {
    adoptedPetSlice,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
    

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;