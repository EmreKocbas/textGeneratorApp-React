import { configureStore } from '@reduxjs/toolkit';
import soreReducer from "./slices/textSlice"; // Import the reducer from the textSlice

// Configure the Redux store
const store = configureStore({
  reducer: {
    paragraph: soreReducer // Add the text slice reducer to the store under the key 'paragraph'
  }
});

export default store; // Export the configured store
