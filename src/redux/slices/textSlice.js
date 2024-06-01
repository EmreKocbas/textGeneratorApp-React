import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Asynchronous thunk to fetch a specified number of paragraphs with a specified format
export const getParagraph = createAsyncThunk(
  "quote/getParagraph",
  async ({ count, includeHTML }) => {
    const res = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${includeHTML}`
    ).then((data) => data.text());
    return res;
  }
);

// Create a slice of the Redux store for managing paragraph state
export const textSlice = createSlice({
  name: "paragraph",
  initialState: {
    quotes: "", // Store the fetched quotes
    loading: false, // Loading state for asynchronous actions
    includeHTML: "text", // Format of the fetched quotes (text or HTML)
    count: 4, // Number of paragraphs to fetch
    error: "", // Error message if the fetch fails
  },
  reducers: {
    // Update the number of paragraphs
    updateParagraph: (state, action) => {
      state.count = action.payload;
    },
    // Update the format of the paragraphs (text or HTML)
    updateIncludeHTML: (state, action) => {
      state.includeHTML = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handle pending state of the getParagraph thunk
    builder.addCase(getParagraph.pending, (state) => {
      state.loading = true;
    });
    // Handle fulfilled state of the getParagraph thunk
    builder.addCase(getParagraph.fulfilled, (state, action) => {
      state.quotes = action.payload;
      state.loading = false;
    });
    // Handle rejected state of the getParagraph thunk
    builder.addCase(getParagraph.rejected, (state) => {
      state.loading = false;
      state.error = "An error occurred while fetching the quotes."; // Set error message
    });
  },
});

// Export actions to update paragraph count and format
export const { updateParagraph, updateIncludeHTML } = textSlice.actions;

// Export the reducer to be included in the Redux store
export default textSlice.reducer;
