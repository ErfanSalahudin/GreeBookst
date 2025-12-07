import React from 'react';
import { Book } from '../types/book';
import { styles } from '../styles/booksCollection';

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div style={styles.bookCard}>
      <img
        src={book.coverUrl}
        alt={book.title}
        style={styles.bookCover}
        onError={(e) => {
          ;(e.target as HTMLImageElement).onerror = null
          ;(
            e.target as HTMLImageElement
          ).src = `https://via.placeholder.co/180x280?text=${book.title.replace(
            /\s/g,
            '+'
          )}`
        }}
      />
    </div>
  )
}

export default BookCard;
