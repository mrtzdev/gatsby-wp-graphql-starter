


import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => {
  const post = data.wpgraphql.pageBy

  return (
    <Layout>
      <SEO title={post.title} />
      <div>
        <div className="entry-header">
          <h1>{post.title}</h1>
        </div>
         <div className="post-meta">
            <span> Post by {post.author.name}   </span> |
            <span> {post.date}   </span>
			   </div>
         <div className="entry-content">
         <div dangerouslySetInnerHTML={{ __html: post.content }} />
         </div>

      </div>
    </Layout>
  )
}
export const query = graphql`

query GET_PAGE($slug: String) {
    wpgraphql {
      pageBy(uri: $slug) {
        title
        content
        date
        author {
          node {
            name
            slug
            avatar {
              url
            }
         }
        }
      }
    }
  }
`
