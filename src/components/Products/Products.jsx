import React from "react"
import products from "../../../functions/create-checkout/data/products.json"
import ProductCard from "../ProductCard/ProductCard"

const Products = () => {
  return (
    <section>
      <h2>Travelers shop</h2>
      <section className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.sku}
            sku={product.sku}
            productName={product.name}
            description={product.description}
            price={product.price}
            currency={product.currency}
            image={product.image}
            product={product}
          />
        ))}
      </section>
    </section>
  )
}
export default Products
