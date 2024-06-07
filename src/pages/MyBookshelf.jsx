import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from '../components/BookCard';
import Button from '../components/Button';
import '../App.css';

const MyBookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const handleRemoveFromBookshelf = (index) => {
    const updatedBookshelf = bookshelf.filter((_, i) => i !== index);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  const redirectToSearch = () => {
    navigate('/');
  };

  return (
    <div className="bookshelf-container">
      <button className="search-button" onClick={redirectToSearch}>
        Search More Books
      </button>
      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
            />
            <div className="details">
              <div className="title">{book.title}</div>
              <div className="author">{book.author_name?.join(', ')}</div>
            </div>
            <button className="remove-button" onClick={() => handleRemoveFromBookshelf(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookshelf;
