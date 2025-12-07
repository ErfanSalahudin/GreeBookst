import React, { useState } from 'react'
import HeroSection from './sections/HeroSection'
import BooksSection from './sections/BooksSection'
import ServiceLibrarySection from './sections/ServiceLibrarySection'
import Header from '../../components/layout/Header'
import LoginModal from '../../components/LoginModal'
import RegisterModal from '../../components/RegisterModal'

const LandingPage: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const openLoginModal = () => {
    setIsRegisterModalOpen(false) // Close register modal if open
    setIsLoginModalOpen(true)
  }
  const closeLoginModal = () => setIsLoginModalOpen(false)

  const openRegisterModal = () => {
    setIsLoginModalOpen(false) // Close login modal if open
    setIsRegisterModalOpen(true)
  }
  const closeRegisterModal = () => setIsRegisterModalOpen(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
      />
      <main className="flex-grow pt-[112px]">
        <HeroSection />
        <BooksSection />
        <ServiceLibrarySection />
      </main>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        openRegisterModal={openRegisterModal}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        openLoginModal={openLoginModal}
      />
    </div>
  )
}

export default LandingPage
