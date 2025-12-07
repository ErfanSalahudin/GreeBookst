import React from 'react'

const ServiceLibrarySection: React.FC = () => {
  return (
    <section
      id="service-library"
      className="bg-blue-800 text-white py-20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-700 transform -skew-x-12 -ml-16"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 transform skew-x-12 -mr-16"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-4">Service Library</h2>
        <h3 className="text-5xl font-bold mb-12">
          Beberapa Layanan Yang Kami Tawarkan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
            <h4 className="text-3xl font-semibold mb-4">Peminjaman</h4>
            <p className="text-lg mb-6">
              Peminjaman buku mudah dan cepat tanpa denda
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-200 text-lg font-semibold flex items-center"
            >
              Pinjam Sekarang <span className="ml-2">{'>'}</span>
            </a>
          </div>

          <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
            <h4 className="text-3xl font-semibold mb-4">Kartu Anggota</h4>
            <p className="text-lg mb-6">
              Pembuatan kartu anggota hanya dengan KTP tanpa biaya
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-200 text-lg font-semibold flex items-center"
            >
              Gabung Sekarang <span className="ml-2">{'>'}</span>
            </a>
          </div>

          <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
            <h4 className="text-3xl font-semibold mb-4">Koleksi Buku</h4>
            <p className="text-lg mb-6">
              Koleksi buku lengkap dan kondisi yang masih bagus
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-200 text-lg font-semibold flex items-center"
            >
              Baca Buku <span className="ml-2">{'>'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceLibrarySection
