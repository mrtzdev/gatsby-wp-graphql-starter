import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => {

  return (
    <Layout>
    <SEO title="Wordpress Posts" />

<div>
<h1>Wordpress Posts</h1>

<div>

    {data.wpgraphql.posts.nodes.map(( node , index) => (

      <div className="article" key={index}>
        <div>  <Link to={`/${node.slug}`}>{node.title}</Link></div>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>

    ))}
  </div>
</div>
    </Layout>
  )
}
export const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          title
          excerpt
          id
          slug
        }
      }
    }
  }
`
