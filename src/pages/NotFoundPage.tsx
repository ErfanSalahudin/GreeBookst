import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-8">Halaman Tidak Ditemukan</h2>
      <p className="text-lg text-center mb-8">
        Maaf, halaman yang Anda cari tidak ada. Mungkin Anda salah mengetik
        alamat atau halaman telah dipindahkan.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-200"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}

export default NotFoundPage
