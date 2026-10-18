import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../redux/CartSlice'

function Navbar() {
  const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <nav className="main-navbar">
      <Link to="/" className="brand-link">
        <span className="brand-icon">❀</span>
        <span>Paradise Nursery</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/plants" className="nav-link">
          Plants
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart
        </NavLink>
      </div>

      <Link to="/cart" className="cart-link" aria-label="View cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-text">Cart</span>
        <span className="cart-badge">{totalQuantity}</span>
      </Link>
    </nav>
  )
}

export default Navbar
