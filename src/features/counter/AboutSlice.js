import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../Utlis/baseUrl";

// Initial State
const initialState = {
    abouts: [],
    singleAbout: null,
    loading: false,
    error: null,
};

// Get All About Data
export const getAllAbouts = createAsyncThunk(
    "about/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseURL}/api/aboutdata`);
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

// Create About Data
export const createAbout = createAsyncThunk(
    "about/create",
    async (formData, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseURL}/api/createabout`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            dispatch(getAllAbouts()); // refresh list
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

//  Get Single About
export const getSingleAbout = createAsyncThunk(
    "about/getSingle",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseURL}/api/about/${id}`);
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

//  Update About
export const updateAbout = createAsyncThunk(
    "about/update",
    async ({ id, formData }, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.put(`${baseURL}/api/about/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            dispatch(getAllAbouts());
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

//  Delete About
export const deleteAbout = createAsyncThunk(
    "about/delete",
    async (id, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.delete(`${baseURL}/api/about/${id}`);
            dispatch(getAllAbouts());
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

// Slice
export const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get All
        builder.addCase(getAllAbouts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllAbouts.fulfilled, (state, action) => {
            state.loading = false;
            state.abouts = action.payload;
        });
        builder.addCase(getAllAbouts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        });

        // Create
        builder.addCase(createAbout.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createAbout.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(createAbout.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        });

        // Get Single
        builder.addCase(getSingleAbout.fulfilled, (state, action) => {
            state.singleAbout = action.payload;
        });

        // Update
        builder.addCase(updateAbout.fulfilled, (state) => {
            state.loading = false;
        });

        // Delete
        builder.addCase(deleteAbout.fulfilled, (state) => {
            state.loading = false;
        });
    },
});

export default aboutSlice.reducer;
