import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './HeaderUser'
import bgImage from '../../image/bg.jpg'

const pageStyles = {
  dashboardContainer: {
    paddingTop: '60px',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4'
  },
  heroSection: {
    position: 'relative' as 'relative',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as 'center',
    overflow: 'hidden'
  },
  backgroundImage: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover' as 'cover',
    zIndex: 1
  },
  overlay: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2
  },
  heroContent: {
    position: 'relative' as 'relative',
    zIndex: 3,
    color: '#ffffff'
  },
  welcomeText: {
    fontSize: '4vw',
    fontWeight: 'bold',
    marginBottom: '30px',
    letterSpacing: '2px',
    margin: 0
  },
  actionButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center'
  },
  actionButton: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    padding: '12px 30px',
    fontSize: '16px',
    cursor: 'pointer',
    textTransform: 'uppercase' as 'uppercase',
    fontWeight: 'bold'
  }
}

const DashboardUserPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div style={pageStyles.dashboardContainer}>
      <Header appName="DASHBOARD" userName="USER" />

      <main style={pageStyles.heroSection}>
        <img
          src={bgImage}
          alt="Library Office Interior"
          style={pageStyles.backgroundImage}
        />

        <div style={pageStyles.overlay}></div>

        <div style={pageStyles.heroContent}>
          <h1 style={pageStyles.welcomeText}>WELCOME TO DASHBOARD</h1>

          <div style={pageStyles.actionButtons}>
            <button style={pageStyles.actionButton}>BORROW</button>
            <button style={pageStyles.actionButton} onClick={() => navigate('/dashboard/books')}>Books Collections</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardUserPage
