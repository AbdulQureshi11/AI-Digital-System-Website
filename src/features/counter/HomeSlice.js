import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Utlis/baseUrl";

// Initial State
const initialState = {
    slides: [],
    singleSlide: null,
    loading: false,
    error: null,
};

//  Get All Home Slides
export const getAllHomeSlides = createAsyncThunk(
    "home/getAll",
    async () => {
        try {
            const response = await axios.get(`${baseURL}/api/homedata`);
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

//  Create Home Slide
export const createHomeSlide = createAsyncThunk(
    "home/create",
    async (formData, { dispatch }) => {
        try {
            const response = await axios.post(`${baseURL}/api/createdata`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            dispatch(getAllHomeSlides()); // refresh list
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

//  Get Single Slide
export const getSingleHomeSlide = createAsyncThunk(
    "home/getSingle",
    async (id) => {
        try {
            const response = await axios.get(`${baseURL}/api/home/${id}`);
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

//  Delete Slide
export const deleteHomeSlide = createAsyncThunk(
    "home/delete",
    async (id, { dispatch }) => {
        try {
            const response = await axios.delete(`${baseURL}/api/home/${id}`);
            dispatch(getAllHomeSlides());
            return response?.data;
        } catch (error) {
            throw error.response?.data || "Something went wrong";
        }
    }
);

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get All
        builder.addCase(getAllHomeSlides.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllHomeSlides.fulfilled, (state, action) => {
            state.loading = false;
            state.slides = action.payload;
        });
        builder.addCase(getAllHomeSlides.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        // Create
        builder.addCase(createHomeSlide.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createHomeSlide.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(createHomeSlide.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        // Get Single
        builder.addCase(getSingleHomeSlide.fulfilled, (state, action) => {
            state.singleSlide = action.payload;
        });

        // Delete
        builder.addCase(deleteHomeSlide.fulfilled, (state) => {
            state.loading = false;
        });
    },
});

export default homeSlice.reducer;
