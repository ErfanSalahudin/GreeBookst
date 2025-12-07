import React, { useRef } from 'react'

const BooksSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const images = [
    '/image/act1.jpg',
    '/image/act2.jpg',
    '/image/act3.jpg',
    '/image/act4.jpg',
    '/image/hr2.jpg',
    '/image/hr3.jpg',
    '/image/hr4.jpg',
    '/image/ed2.jpg'
  ]

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <section id="books-section" className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold mb-4">BOOKS</h2>
        <h3 className="text-5xl font-bold mb-8">
          Buku Langka dan Eksklusif Menunggu Anda
        </h3>
        <p className="text-xl mb-12">
          Jelajahi koleksi istimewa yang tidak dapat anda temukan di tempat
          lain. Setiap buku memiliki cerita unik tersendiri.
        </p>
        <div className="relative">
          <div ref={carouselRef} className="flex overflow-x-auto gap-8 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {images.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-64 bg-gray-700 h-80 rounded-lg shadow-lg border-4 border-white flex items-center justify-center text-gray-300 overflow-hidden">
                <img
                  src={src}
                  alt={`Book Cover ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full shadow-lg hover:bg-blue-800"
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full shadow-lg hover:bg-blue-800"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

export default BooksSection
