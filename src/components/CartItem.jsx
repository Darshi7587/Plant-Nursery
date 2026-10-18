import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartItems,
  selectTotalCost,
  selectTotalQuantity,
} from '../redux/CartSlice'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalItems = useSelector(selectTotalQuantity)
  const totalCost = useSelector(selectTotalCost)

  const handleCheckout = () => {
    window.alert('Coming Soon!')
  }

  return (
    <div className="page-shell cart-page">
      <Navbar />

      <main className="cart-container">
        <header className="cart-header">
          <h2>Your Shopping Cart</h2>
          <div className="summary-inline">
            <span>Total Items: {totalItems}</span>
            <span>Total Cost: ₹{totalCost}</span>
          </div>
        </header>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty.</h3>
            <Link to="/plants" className="secondary-button">
              Continue Shopping
            </Link>
            <div className="summary-card">
              <p>Total Items: 0</p>
              <p>Total Cost: ₹0</p>
            </div>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <div className="cart-item-title-row">
                      <h3>{item.name}</h3>
                      <button
                        type="button"
                        className="delete-button"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Delete
                      </button>
                    </div>

                    <p>Unit Price: ₹{item.price}</p>

                    <div className="quantity-row">
                      <button
                        type="button"
                        className="quantity-button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        type="button"
                        className="quantity-button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>

                    <p className="item-subtotal">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="summary-card">
              <h3>Summary</h3>
              <div className="summary-line">
                <span>Total Items</span>
                <strong>{totalItems}</strong>
              </div>
              <div className="summary-line total-line">
                <span>Total Cost</span>
                <strong>₹{totalCost}</strong>
              </div>
              <div className="cart-actions">
                <Link to="/plants" className="secondary-button">
                  Continue Shopping
                </Link>
                <button
                  type="button"
                  className="checkout-button"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  )
}

export default CartItem
