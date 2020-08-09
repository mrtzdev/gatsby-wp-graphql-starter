import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => {

  return (
    <Layout>
    <SEO title="Wordpress Pages"/>
    <div>
    <h1>Wordpress Pages</h1>

    <div>

        {data.wpgraphql.pages.nodes.map(( node , index) => (
          <div className="article" key={index}>
            <div>  <Link to={`/${node.slug}`}>{node.title}</Link></div>
            
          </div>

        ))}
      </div>


    </div>
      <hr />
    </Layout>
  )
}
export const query = graphql`
  query {
    wpgraphql {
      pages {
        nodes {
          title

          id
          slug
        }
      }
    }
  }
`
