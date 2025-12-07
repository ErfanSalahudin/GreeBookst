import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: "url('/src/image/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{' '}
      {/* Overlay */}
      <div className="container mx-auto text-center relative z-10 text-white">
        <h1 className="text-6xl font-bold mb-4">
          Temukan Dunia Pengetahuan Pada Perpustakaan GreeBooks
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Jelajahi ribuan buku dengan warna dan inspirasi tak terbatas. Setiap
          halaman adalah petualangan baru yang menunggu untuk dibuka.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800">
            AYO BACA!
          </button>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
            BUKU
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
