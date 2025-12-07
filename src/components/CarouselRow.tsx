import React, { useState } from 'react';
import { BookCategory } from '../types/book';
import BookCard from './BookCard';
import { styles } from '../styles/booksCollection';

const CarouselRow: React.FC<{ categoryData: BookCategory }> = ({ categoryData }) => {
    const [startIndex, setStartIndex] = useState(0);
    const books = categoryData.books;
    const itemsPerSlide = 6;
    const maxIndex = Math.max(0, books.length - itemsPerSlide);

    const handleNext = () => {
        setStartIndex((prev) => Math.min(prev + itemsPerSlide, maxIndex));
    };

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - itemsPerSlide, 0));
    };

    const isNextDisabled = startIndex >= maxIndex;
    const isPrevDisabled = startIndex === 0;

    const translateX = -startIndex * (100 / itemsPerSlide);

    const getNavStyle = (side: 'left' | 'right', isDisabled: boolean): React.CSSProperties => ({
        ...styles.navButton,
        [side]: side === 'left' ? '-50px' : '-50px',
        opacity: isDisabled ? 0.4 : 1,
        pointerEvents: isDisabled ? 'none' : 'auto',
    });

    return (
        <div style={{ position: 'relative', margin: '0 10px' }}>
            <button
                onClick={handlePrev}
                disabled={isPrevDisabled}
                style={getNavStyle('left', isPrevDisabled)}
            >
                &#9664;
            </button>

            <div style={{ overflow: 'hidden', paddingBottom: '20px' }}>
                <div
                    style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease-in-out',
                        transform: `translateX(${translateX}%)`,
                        width: `${(books.length / itemsPerSlide) * 100}%`,
                    }}
                >
                    {books.map((book) => (
                        <div
                            key={book.id}
                            style={{ flex: `0 0 ${100 / itemsPerSlide}%`, padding: '0 15px', boxSizing: 'border-box' }}
                        >
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={handleNext}
                disabled={isNextDisabled}
                style={getNavStyle('right', isNextDisabled)}
            >
                &#9654;
            </button>
        </div>
    );
};

export default CarouselRow;
