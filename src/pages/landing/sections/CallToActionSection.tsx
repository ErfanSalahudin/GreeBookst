import React from 'react'

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-blue-700 text-white py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Dive into a World of Books?
        </h2>
        <p className="text-xl mb-8">
          Join GreeBooks today and start your reading journey.
        </p>
        <button className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100">
          Sign Up for Free
        </button>
      </div>
    </section>
  )
}

export default CallToActionSection
