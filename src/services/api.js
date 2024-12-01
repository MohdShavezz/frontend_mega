import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

// Fetch all books
export const fetchBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`);
  return response.data;
};

// Add a new book
export const addBook = async (book) => {
  const response = await axios.post(`${API_BASE_URL}/books`, book);
  return response.data;
};

// Sign up (Register) a new user
export const signUp = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Signup failed. Please try again." };
  }
};

// Log in a user
export const logIn = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed. Please check your credentials." };
  }
};
// Log out the user
export const logOut = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/logout`, {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Logout failed. Please try again." };
  }
};

