import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import logo from '/src/image/logo.png'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  openLoginModal: () => void
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  openLoginModal
}) => {
  const [showPassword, setShowPassword] = useState(false)

  if (!isOpen) return null

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-blue-900 p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl font-bold"
        >
          &times;
        </button>
        <div className="flex justify-center mb-4">
          <img src={logo} alt="GreeBooks Logo" className="h-24 w-24" />
        </div>
        <h1 className="text-white text-4xl font-bold text-center mb-6">
          REGISTER
        </h1>
        <form>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="nik"
              className="text-white text-lg w-24 flex-shrink-0"
            >
              NIK
            </label>
            <span className="text-white text-lg mr-2 flex-shrink-0">:</span>
            <input
              type="text"
              id="nik"
              className="flex-grow p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="email"
              className="text-white text-lg w-24 flex-shrink-0"
            >
              E-Mail
            </label>
            <span className="text-white text-lg mr-2 flex-shrink-0">:</span>
            <input
              type="email"
              id="email"
              className="flex-grow p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="username"
              className="text-white text-lg w-24 flex-shrink-0"
            >
              Username
            </label>
            <span className="text-white text-lg mr-2 flex-shrink-0">:</span>
            <input
              type="text"
              id="username"
              className="flex-grow p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>
          <div className="mb-4 flex items-center relative">
            <label
              htmlFor="password"
              className="text-white text-lg w-24 flex-shrink-0"
            >
              Password
            </label>
            <span className="text-white text-lg mr-2 flex-shrink-0">:</span>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="flex-grow p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder=""
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 pr-3 flex items-center text-white h-full"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="mb-6 flex items-center">
            <label
              htmlFor="mobile"
              className="text-white text-lg w-24 flex-shrink-0"
            >
              No Seluler
            </label>
            <span className="text-white text-lg mr-2 flex-shrink-0">:</span>
            <input
              type="text"
              id="mobile"
              className="flex-grow p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>
          <div className="flex justify-between items-center mt-8">
            <p className="text-white text-sm">
              If you already have an account, please{' '}
              <a
                href="#"
                onClick={openLoginModal}
                className="text-blue-400 hover:underline"
              >
                log in
              </a>
            </p>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterModal
