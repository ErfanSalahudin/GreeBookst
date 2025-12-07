import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import NotFoundPage from './pages/NotFoundPage'
import DashboardUserPage from './pages/dashboarduser/DashboardUserPage'
import BooksCollectionPage from './pages/dashboarduser/BooksCollectionPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardUserPage />} />
      <Route path="/dashboard/books" element={<BooksCollectionPage />} />
      {/* Add other routes here for admin panel, auth, etc. later */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
