// src/features/counter/ProductSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Utlis/baseUrl";

const initialState = {
    products: [],
    singleProduct: null,
    loading: false,
    error: null,
};

//  Get All Products
export const getAllProducts = createAsyncThunk("product/getAll", async () => {
    try {
        const response = await axios.get(`${baseURL}/api/productdata`);
        return response?.data;
    } catch (error) {
        throw error.response?.data || "Something went wrong";
    }
});

//  Create Product
export const createProduct = createAsyncThunk(
    "product/create",
    async (formData, { dispatch }) => {
        try {
            const response = await axios.post(`${baseURL}/api/createproduct`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            dispatch(getAllProducts()); // refresh list
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

//  Get Single Product by Slug
export const getProductBySlug = createAsyncThunk(
    "product/getBySlug",
    async (slug) => {
        try {
            const response = await axios.get(`${baseURL}/api/product/slug/${slug}`);
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

//  Update Product
export const updateProduct = createAsyncThunk(
    "product/update",
    async ({ id, formData }, { dispatch }) => {
        try {
            const response = await axios.put(`${baseURL}/api/product/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            dispatch(getAllProducts());
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

//  Delete Product
export const deleteProduct = createAsyncThunk(
    "product/delete",
    async (id, { dispatch }) => {
        try {
            const response = await axios.delete(`${baseURL}/api/product/${id}`);
            dispatch(getAllProducts());
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //  Get All
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        //  Create
        builder.addCase(createProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createProduct.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        //  Get by Slug
        builder.addCase(getProductBySlug.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getProductBySlug.fulfilled, (state, action) => {
            state.loading = false;
            state.singleProduct = action.payload;
        });
        builder.addCase(getProductBySlug.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        //  Update
        builder.addCase(updateProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateProduct.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        //  Delete
        builder.addCase(deleteProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteProduct.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default productSlice.reducer;
