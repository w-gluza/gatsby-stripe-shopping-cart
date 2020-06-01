const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const { validateCartItems } = require("use-shopping-cart/src/serverUtil")

const inventory = require("./data/products.json")

exports.handler = async event => {
  try {
    const productJSON = JSON.parse(event.body)
    const line_items = validateCartItems(inventory, productJSON)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      line_items: [...line_items],
      success_url:
        "https://affectionate-williams-d35a52.netlify.app/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://affectionate-williams-d35a52.netlify.app/cancel",
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    console.error(error)
  }
}
