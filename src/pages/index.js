import React from "react"
import Store from "../components/Store/Store"
import { Link } from "gatsby"
import "../style/style.css"

const IndexPage = () => (
  <>
    <p>Main page</p>
    <Store />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </>
)

export default IndexPage
