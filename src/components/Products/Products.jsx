import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import products from "../../../functions/create-checkout/data/products.json"
import { formatCurrencyString } from "use-shopping-cart/src/util"

const Products = () => {
  const { addItem, removeItem, decrementItem } = useShoppingCart()
  return (
    <section>
      {products.map(product => (
        <div key={product.sku}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>

          <button
            type="button"
            className="btn-black"
            onClick={() => addItem(product)}
          >
            Add To Cart
          </button>
          <button
            type="button"
            className="btn-black"
            onClick={() => removeItem(product.sku)}
          >
            Remove all: <b>{product.name}</b>
          </button>
          <button
            type="button"
            className="btn-black"
            onClick={() => decrementItem(product.sku)}
          >
            Remove one: <b>{product.name}</b>
          </button>
        </div>
      ))}
    </section>
  )
}
export default Products
