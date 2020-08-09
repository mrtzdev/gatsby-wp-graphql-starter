import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby Wordpress Starter.</p>
    <p>Now go build something great.</p>

    <hr />
    <h2> <Link to="/posts/">Posts </Link> </h2>
    <h2> <Link to="/pages/">Pages </Link> </h2>

    <hr />

    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

  </Layout>
)

export default IndexPage
