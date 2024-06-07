import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import '../App.css';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (e) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
    const data = await response.json();
    setBooks(data.docs);
  };

  const handleAddToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };

  return (
    <div>
    <input
      type="text"
      className="search-input"
      placeholder="Search for a book..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        searchBooks();
      }}
    />
    <div>
      {books.map((book) => (
        <div key={book.key} className="book-card">
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt={book.title}
          />
          <div className="details">
            <div className="title">{book.title}</div>
            <div className="author">{book.author_name?.join(', ')}</div>
          </div>
          <button className="add-button" onClick={() => handleAddToBookshelf(book)}>
            Add to Bookshelf
          </button>
        </div>
      ))}
    </div>
    <Link to="/mybookself" className="bookshelf-link">
      Go to My Bookshelf
    </Link>
  </div>
 );
};

export default BookSearchPage;
