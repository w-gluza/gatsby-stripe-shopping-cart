import React from "react"
import { useShoppingCart } from "use-shopping-cart"

const Cart = () => {
  const {
    cartDetails,
    formattedTotalPrice,
    redirectToCheckout,
    incrementItem,
    decrementItem,
    removeItem,
  } = useShoppingCart()

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch("/.netlify/functions/create-checkout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then(res => res.json())
      .catch(error => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
  }

  return (
    <div className="cart">
      <ul>
        <div className="table-headers-container">
          <span></span>
          <p className="tb-header">Article</p>
          <p className="tb-header">Quantity</p>
          <p className="tb-header">Price</p>
          <p className="tb-header">Actions</p>
        </div>
        {Object.values(cartDetails).map(product => (
          <li key={product.sku} className="table-rows-container">
            <img src={product.image} className="cart-img" alt={product.name} />
            <p>{product.name}</p>
            <div className="quantity-container">
              <button
                className="btn-quantity"
                onClick={() => decrementItem(product.sku)}
              >
                -
              </button>
              <p>{product.quantity}</p>
              <button
                className="btn-quantity"
                onClick={() => incrementItem(product.sku)}
              >
                +
              </button>
            </div>
            <p>{product.formattedValue}</p>
            <button
              className="btn-delete"
              onClick={() => removeItem(product.sku)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary-container">
        <button className="btn btn-black btn-checkout" onClick={handleSubmit}>
          Check Out
        </button>
        <p className="price-total-value">{formattedTotalPrice}</p>
        <p className="price-total-title">Total Price</p>
      </div>
    </div>
  )
}

export default Cart
