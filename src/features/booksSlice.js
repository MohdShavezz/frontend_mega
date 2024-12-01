import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooks, addBook } from "../services/api";
import { toast } from "react-toastify";

// Async Thunks
export const loadBooks = createAsyncThunk("books/loadBooks", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchBooks();
    return data;
  } catch (error) {
    // Extract error message from the backend response (if any)
    return rejectWithValue(error.response?.data?.message || error.message || "Something went wrong.");
  }
});

export const createBook = createAsyncThunk("books/createBook", async (book, { rejectWithValue }) => {
  try {
    const data = await addBook(book);
    return data;
  } catch (error) {
    // Handle and extract error message from the backend response (if any)
    return rejectWithValue(error.response?.data?.message || error.message || "Failed to create book.");
  }
});

// Books Slice
const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
    successMessage: "", 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Load Books
      .addCase(loadBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture custom error message
      })
      // Create Book
      .addCase(createBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload.data);
        toast.success(action.payload.message);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture custom error message
        toast.error(action.payload.message);
      });
  },
});

export default booksSlice.reducer;
