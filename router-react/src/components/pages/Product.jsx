import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import Products from '../../Data'
import { useCart } from "../CartContext";

const Product = () => {
  const { productName } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  // Find the specific product
  const product = Products.find(item => item.Name === decodeURIComponent(productName))

  if (!product) {
    return <div>Product Not Found</div>
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    toast.success(`Added ${quantity} ${product.Name} to cart!`, {
      position: "top-right",
      autoClose: 2000,
    })
  }

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Image - Left Side */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.Name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', objectFit: 'cover', marginBottom: '2rem' }}
          />
        </div>

        {/* Product Details - Right Side */}
        <div className="col-md-6">
          <div className="product-details">
            <h1 className="display-5 fw-bold mb-3">{product.Name}</h1>
            <p className="lead text-muted mb-4">{product.Description}</p>

            <div className="price-section mb-4">
              <h2 className="text-dark fw-bold">{product.Price} THB</h2>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector d-flex justify-content-end align-items-center mb-4">
              <button
                className="btn btn-outline-dark me-3"
                onClick={() => handleQuantityChange("decrease")}
              >
                -
              </button>
              <span className="quantity mx-3">{quantity}</span>
              <button
                className="btn btn-outline-dark ms-3"
                onClick={() => handleQuantityChange("increase")}
              >
                +
              </button>
            </div>

            <div className="d-flex justify-content-end mt-2">
              <button
                style={{ width: "140px" }}
                className="btn btn-success btn-lg"
                onClick={handleAddToCart}
              >
                Buy
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Product