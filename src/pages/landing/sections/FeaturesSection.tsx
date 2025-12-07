import React from 'react'

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose GreeBooks?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Vast Collection</h3>
            <p className="text-gray-700">
              Access thousands of books across various genres.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Read Anywhere</h3>
            <p className="text-gray-700">
              Enjoy your favorite books on any device, anytime.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Personalized Experience
            </h3>
            <p className="text-gray-700">
              Get recommendations tailored to your reading habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
