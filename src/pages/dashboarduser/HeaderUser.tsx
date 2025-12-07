import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  appName: string
  userName: string
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: '#0d284f',
    color: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'fixed' as 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxSizing: 'border-box' as 'border-box'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  navLinks: {
    display: 'flex',
    gap: '30px'
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer'
  },
  userButton: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid #ffffff',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px'
  },
  userName: {
    marginRight: '5px'
  },
  dropdown: {
    position: 'absolute' as 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#0d284f',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1001,
    minWidth: '150px',
    display: 'none'
  },
  dropdownOpen: {
    display: 'block'
  },
  dropdownItem: {
    padding: '10px 15px',
    color: '#ffffffff',
    textDecoration: 'none',
    display: 'block',
    fontSize: '14px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee'
  },
  dropdownItemLast: {
    borderBottom: 'none'
  }
}

const Header: React.FC<HeaderProps> = ({ appName, userName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleMenuItemClick = (action: string) => {
    console.log(`${action} clicked`)
    setIsDropdownOpen(false)

    if (action === 'Logout') {
      navigate('/')
    }
  }

  return (
    <header style={styles.header}>
      <div style={styles.logo}>{appName}</div>

      <nav style={styles.navLinks}>
        <a href="#home" style={styles.navLink}>
          HOME
        </a>
        <span onClick={() => navigate('/dashboard/books')} style={styles.navLink}>
          BOOKS
        </span>
        <a href="#history" style={styles.navLink}>
          HISTORY
        </a>
        <a href="#membership" style={styles.navLink}>
          MEMBERSHIP
        </a>
      </nav>

      <div style={{ position: 'relative' }}>
        <button style={styles.userButton} onClick={toggleDropdown}>
          <span style={styles.userName}>{userName}</span>
          &#9660;
        </button>
        <div
          style={{
            ...styles.dropdown,
            ...(isDropdownOpen ? styles.dropdownOpen : {})
          }}
        >
          <div
            style={styles.dropdownItem}
            onClick={() => handleMenuItemClick('Profile')}
          >
            Profile
          </div>
          <div
            style={styles.dropdownItem}
            onClick={() => handleMenuItemClick('Payment')}
          >
            Payment
          </div>
          <div
            style={{ ...styles.dropdownItem, ...styles.dropdownItemLast }}
            onClick={() => handleMenuItemClick('Logout')}
          >
            Logout
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
