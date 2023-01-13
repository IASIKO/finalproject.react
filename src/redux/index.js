import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { useSelector } from "react-redux";
import { productReducer } from "./slices/ProductSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// action creator

export { authenticateUser, logoutUser } from "./slices/userSlice";
export {
  // asynthunks
  saveProduct,
  fetchHomePageProducts,
  fetchCategoryProducts,
  // reducers
  setSelectedProduct,
} from "./slices/ProductSlice";

// user hooks

export const useUserInfo = () => useSelector((state) => state.user.userData);

// products hooks
export const useSelectedProduct = () =>
  useSelector((state) => state.product.selectedProduct);
export const useHomePageProducts = () =>
  useSelector((state) => state.product.homePageProducts);
export const useCategories = () =>
  useSelector((state) => state.product.categories);
export const useCategoryProducts = () =>
  useSelector((state) => state.product.categoryProducts);
