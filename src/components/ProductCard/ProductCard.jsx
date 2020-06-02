import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { formatCurrencyString } from "use-shopping-cart/src/util"

const ProductCard = ({
  product,
  sku,
  productName,
  description,
  price,
  currency,
  image,
}) => {
  const { addItem, removeItem } = useShoppingCart()
  return (
    <article key={sku} className="product-card">
      <figure>
        <img src={image} alt={productName} className="card-img" />
      </figure>

      <div className="card-content-container">
        <div className="card-header">
          <h4>{productName}</h4>
          <h4>
            {formatCurrencyString({
              value: price,
              currency: currency,
            })}
          </h4>
        </div>
        <p>{description}</p>
        <div className="card-action-buttons">
          <button
            type="button"
            className="btn-black-outlined"
            onClick={() => removeItem(sku)}
          >
            Remove item
          </button>

          <button
            type="button"
            className="btn-black"
            onClick={() => addItem(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      {/* <button
        type="button"
        className="btn-black"
        onClick={() => decrementItem(sku)}
      >
        Remove one: <b>{name}</b>
      </button> */}
    </article>
  )
}

export default ProductCard
