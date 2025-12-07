import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_BOOKS_DATA } from '../../data/booksData';
import { BookCategory } from '../../types/book';
import { styles } from '../../styles/booksCollection';
import UserDropdown from '../../components/UserDropdown';
import CarouselRow from '../../components/CarouselRow';

const BooksCollectionPage: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const handleBackClick = () => {
    navigate('/dashboard')
  }

  const filteredCategories = searchQuery
    ? MOCK_BOOKS_DATA.filter(category =>
        category.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : MOCK_BOOKS_DATA

  return (
    <div style={styles.pageContainer}>
      <div style={styles.navBar}>
         <button style={styles.backButton} onClick={handleBackClick}>
         {'< BACK'}
         </button>

         <h1 style={styles.title}>Books Collections</h1>

        <div style={styles.userContainer}>
            <button style={styles.userButton} onClick={toggleDropdown}>
                USER &#9660;
            </button>
            {isDropdownOpen && (
                <UserDropdown />
            )}
        </div>
     </div>

      <div style={styles.content}>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
           <div></div>
           <input
             type="search"
             placeholder="🔍 Search"
             style={styles.searchBar}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
         </div>
         {filteredCategories.map((categoryData: BookCategory) => (
         <div key={categoryData.category}>
             <h2 style={styles.categoryTitle}>{categoryData.category}</h2>

             <CarouselRow categoryData={categoryData} />
         </div>
        ))}
      </div>
    </div>
  )
}

export default BooksCollectionPage
