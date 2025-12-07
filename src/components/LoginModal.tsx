import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import logo from '/src/image/logo.png'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  openRegisterModal: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  openRegisterModal
}) => {
  const navigate = useNavigate()
  const [nik, setNik] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  if (!isOpen) return null

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleRegisterClick = () => {
    onClose()
    openRegisterModal()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt with:', { nik, username, password })
    onClose()
    navigate('/dashboard')
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
        <div className="flex justify-center mb-1">
          <img src={logo} alt="GreeBooks Logo" className="h-40 w-35" />
        </div>
        <h1 className="text-white text-4xl font-bold text-center mb-6">
          LOGIN
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
              placeholder="Enter NIK"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
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
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6 flex items-center relative">
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
              className="flex-grow p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
          <div className="text-center text-white mt-4">
            If you don't have an account, Please{' '}
            <button
              type="button"
              className="text-blue-400 hover:underline font-semibold"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
