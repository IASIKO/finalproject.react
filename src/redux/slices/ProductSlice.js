import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../application";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, isUpdating }) => {
    const endpoint = isUpdating ? `/products/${product.id}` : "/products";
    const method = isUpdating ? "put" : "post";
    const { data } = await instance[method](endpoint, { product });
    return data;
  }
);

export const fetchHomePageProducts = createAsyncThunk(
  "product/fetchHomePageProduct",
  async () => {
    const { data } = await instance.get("/products");
    return data;
  }
);

export const fetchCategoryProducts = createAsyncThunk(
  "product/fetchCategoryProducts",
  async (url) => {
    const {data} = await instance.get(`/products/categories/${url}`)
    return data
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    selectedProduct: null,
    categories: [],
    homePageProducts: [],
    categoryProducts: [],
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload.product;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveProduct.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(saveProduct.rejected, (state) => {
      state.loading = false;
      state.error = "something went wrong";
    });
    builder.addCase(fetchHomePageProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageProducts = action.payload.products;
      state.categories = action.payload.categories;
    });
    builder.addCase(fetchHomePageProducts.rejected, (state) => {
      state.loading = false;
      state.error = "couldn't fetch home page products, please refresh";
    });
    builder.addCase(fetchCategoryProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryProducts = action.payload;
    });
    builder.addCase(fetchCategoryProducts.rejected, (state) => {
      state.loading = false;
      state.error = "couldn't fetch category products";
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
