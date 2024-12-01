import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../features/booksSlice";
import { List, ListItem, ListItemText, Typography, CircularProgress } from "@mui/material";

const BookList = () => {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  if (loading) return <div style={{ textAlign: 'center', paddingTop: '10rem'}}><CircularProgress /></div>;

  return (
    <div className="my-4">
      <Typography variant="h5" gutterBottom className="text-center pt-2 fs-4">
        Book List
      </Typography>
      <List sx={{ minWidth: '20rem', width: '50%', margin: 'auto' }}>
        {books.length > 0 ? (
          books.map((book) => (
            <ListItem
              key={book._id}
              sx={{
                zIndex: '-2',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
              }}
            >
              <ListItemText primary={book.title} secondary={`Author: ${book.author}`} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '1rem' }}>
            No Books Available!
          </Typography>
        )}

      </List>
    </div>
  );
};

export default BookList;
