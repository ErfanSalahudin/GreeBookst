import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  openLoginModal: () => void
  openRegisterModal: () => void
}

const Header: React.FC<HeaderProps> = ({
  openLoginModal,
  openRegisterModal
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10 py-4 w-full bg-dark-blue-custom">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img
            src="/image/logo.png"
            alt="GreeBooks Logo"
            className="h-20 w-20 mr-2"
          />
          <div className="text-2xl font-bold text-white">GreeBooks</div>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                HOME
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={() => scrollToSection('service-library')}
                className="text-white hover:text-gray-300"
              >
                SERVICE
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => scrollToSection('books-section')}
                className="text-white hover:text-gray-300"
              >
                BOOKS
              </a>
            </li>
            <li>
              <button
                onClick={openLoginModal}
                className="text-white hover:text-gray-300"
              >
                LOGIN
              </button>
            </li>
            <li>
              <button
                onClick={openRegisterModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                REGISTER
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
