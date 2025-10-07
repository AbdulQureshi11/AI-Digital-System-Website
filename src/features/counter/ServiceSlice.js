// src/features/counter/ServiceSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Utlis/baseUrl";

const initialState = {
    services: [],
    singleService: null,
    loading: false,
    error: null,
};

//  Get All Services
export const getAllServices = createAsyncThunk("service/getAll", async () => {
    try {
        const response = await axios.get(`${baseURL}/api/servicedata`);
        return response?.data;
    } catch (error) {
        throw error.response?.data || "Something went wrong";
    }
});

//  Create Service
export const createService = createAsyncThunk(
    "service/create",
    async (formData, { dispatch }) => {
        try {
            const response = await axios.post(
                `${baseURL}/api/createservicedata`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            dispatch(getAllServices()); // refresh list
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

//  Get Single Service (slug based)
export const getSingleService = createAsyncThunk(
    "service/getSingle",
    async (slug) => {
        try {
            const response = await axios.get(`${baseURL}/api/services/${slug}`);
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

//  Update Service
export const updateService = createAsyncThunk(
    "service/update",
    async ({ id, formData }, { dispatch }) => {
        try {
            const response = await axios.put(`${baseURL}/api/service/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            dispatch(getAllServices());
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

//  Delete Service
export const deleteService = createAsyncThunk(
    "service/delete",
    async (id, { dispatch }) => {
        try {
            const response = await axios.delete(`${baseURL}/api/service/${id}`);
            dispatch(getAllServices());
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get All
        builder.addCase(getAllServices.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllServices.fulfilled, (state, action) => {
            state.loading = false;
            state.services = action.payload;
        });
        builder.addCase(getAllServices.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        // Create
        builder.addCase(createService.fulfilled, (state) => {
            state.loading = false;
        });

        // Get Single
        builder.addCase(getSingleService.fulfilled, (state, action) => {
            state.singleService = action.payload;
        });

        // Update
        builder.addCase(updateService.fulfilled, (state) => {
            state.loading = false;
        });

        // Delete
        builder.addCase(deleteService.fulfilled, (state) => {
            state.loading = false;
        });
    },
});

export default serviceSlice.reducer;
