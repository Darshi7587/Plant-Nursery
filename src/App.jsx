import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import './App.css'

const baseName = import.meta.env.PROD ? '/Plant-Nursery' : '/'

function HomePage() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="landing-page">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="section-tag">Bring home calm</p>
            <h1>Nature-inspired living starts here.</h1>
            <p className="hero-text">
              Discover indoor plants, statement greenery, and easy-care favorites
              that turn your space into a peaceful sanctuary.
            </p>
            <div className="hero-actions">
              <Link to="/plants" className="primary-button">
                Shop Plants
              </Link>
              <Link to="/cart" className="secondary-button">
                View Cart
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Plant collection feature image">
            <div className="hero-card top-card">
              <span>Top Rated</span>
              <strong>Air Purifying</strong>
            </div>
            <div className="hero-card bottom-card">
              <span>Garden Pick</span>
              <strong>Low Maintenance</strong>
            </div>
          </div>
        </section>

        <AboutUs />
      </main>
    </div>
  )
}

function AppRoutes() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const redirectPath = new URLSearchParams(location.search).get('redirect')

    if (redirectPath) {
      navigate(redirectPath, { replace: true })
    }
  }, [location.search, navigate])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={baseName}>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
