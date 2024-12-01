import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBook } from "../features/booksSlice";
import { TextField, Button, Box } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { error,loading,successMessage  } = useSelector((state) => state.books);
  const [form, setForm] = useState({ title: "", author: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.title && form.author) {
      try {
        const result = await dispatch(createBook(form)).unwrap();
        if (result) {
          // toast.success("Book created successfully!");
          setForm({ title: "", author: "" });
          navigate('/')
        }
      } catch (error) {
        toast.error(error || "Failed to create book.");
      }
    }
  };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error); // Display error from Redux store (backend error)
  //   }
  // }, [error]);
  // useEffect(() => {
  //   if (successMessage) {
  //     toast.success(successMessage); // Show success message
  //   }
  // }, [successMessage]);

  return (

    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Author"
        name="author"
        value={form.author}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
      {loading ? "Adding..." : "Add Book"}
      </Button>
    </Box>
  );
};

export default BookForm;
 