import React from "react"
import { CartProvider } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"
import Cart from "../Cart/Cart"
import Products from "../Products/Products"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
const Store = () => (
  <>
    <CartProvider mode="checkout-session" stripe={stripePromise} currency="USD">
      <Cart />
      <Products />
    </CartProvider>
  </>
)
export default Store
