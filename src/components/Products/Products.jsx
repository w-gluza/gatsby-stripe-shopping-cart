import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import products from "../../../functions/create-checkout/data/products.json"

const Products = () => {
  const { addItem } = useShoppingCart()
  const format = (price, currency) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format((price / 100).toFixed(2))

  return (
    <section>
      {products.map(product => (
        <div key={product.sku}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{format(product.price, product.currency)}</p>
          <button
            type="button"
            className="btn-black"
            onClick={() => addItem(product)}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </section>
  )
}
export default Products
