import React from 'react';
import '../App.css';

const BookCard = ({ book, onAdd, onRemove }) => {
  return (
    <div className="book-card">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
      />
      <div className="details">
        <div className="title">{book.title}</div>
        <div className="author">{book.author_name?.join(', ')}</div>
      </div>
      {onAdd && (
        <button className="add-button" onClick={onAdd}>
          Add to Bookshelf
        </button>
      )}
      {onRemove && (
        <button className="remove-button" onClick={onRemove}>
          Remove
        </button>
      )}
    </div>
  );
};

export default BookCard;
