import React from "react"
import { useShoppingCart } from "use-shopping-cart"

const Cart = () => {
  const {
    cartDetails,
    cartCount,
    formattedTotalPrice,
    redirectToCheckout,
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
    <div>
      Things in the cart
      <pre>{JSON.stringify({ cartDetails }, null, 2)}</pre>
      <br />
      <br />
      <details>
        <summary>
          <b>Cart Summary ({cartCount})</b>
        </summary>
        <ul>
          {Object.values(cartDetails).map(product => (
            <li key={product.sku}>
              {product.name} ({product.quantity}) — {product.formattedValue}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total Price: {formattedTotalPrice}</strong>
        </p>
      </details>
      <br />
      <br />
      <button className="btn-success" onClick={handleSubmit}>
        Check Out
      </button>
    </div>
  )
}

export default Cart
