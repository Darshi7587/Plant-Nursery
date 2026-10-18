import { useDispatch, useSelector } from 'react-redux'
import plants from '../data/plants'
import { addItem, selectCartItems } from '../redux/CartSlice'
import Navbar from './Navbar'

const categories = [
  'Air Purifying Plants',
  'Succulent Plants',
  'Indoor Flowering Plants',
]

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  return (
    <div className="page-shell">
      <Navbar />

      <main className="product-page">
        <header className="page-header">
          <p className="section-tag">Fresh picks</p>
          <h2>Plant Collection</h2>
        </header>

        {categories.map((category) => {
          const categoryProducts = plants.filter(
            (product) => product.category === category,
          )

          return (
            <section key={category} className="category-section">
              <h3>{category}</h3>
              <div className="product-grid">
                {categoryProducts.map((product) => {
                  const isAdded = cartItems.some((item) => item.id === product.id)

                  return (
                    <article key={product.id} className="plant-card">
                      <img src={product.image} alt={product.name} />
                      <div className="plant-info">
                        <span className="plant-category">{product.category}</span>
                        <h4>{product.name}</h4>
                        <p className="plant-description">{product.description}</p>
                        <div className="plant-meta">
                          <span className="price-tag">₹{product.price}</span>
                          <button
                            type="button"
                            className="add-to-cart-button"
                            disabled={isAdded}
                            onClick={() => dispatch(addItem(product))}
                          >
                            {isAdded ? 'Added to Cart' : 'Add to Cart'}
                          </button>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}

export default ProductList
