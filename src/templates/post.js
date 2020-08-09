

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {

  const post = data.wpgraphql.postBy;

  const getFeaturedImg = post.featuredImage;

  const renderFeaturedImg = () => {
      if(getFeaturedImg){
        return <Img fluid={post.featuredImage.node.imageFile.childImageSharp.fluid} />
      }
  }


  return (
    <Layout>
      <SEO title={post.title} />
      <div>
        <div className="entry-header">
          <h1>{post.title}</h1>
        </div>

         <div className="post-meta">
            <span> Post by {post.author.node.name}   </span> |
            <span> {post.date}   </span>
			   </div>
          {renderFeaturedImg()}
         <div className="entry-content">
         <div dangerouslySetInnerHTML={{ __html: post.content }} />

         <div>
         <strong>Tags: </strong>
           {post.tags.nodes.map(tag => {
             return (
               <span key={tag.id}>
                 {tag.name},
               </span>
             )
           })}
         </div>
         <strong>Categories: </strong>
         <ul>
           {post.categories.nodes.map(category => {
             return (
               <li key={category.id}>
                 {category.name}
               </li>
             )
           })}
         </ul>

         </div>

      </div>
    </Layout>
  )
}
export const query = graphql`

query GET_POST($slug: String) {
    wpgraphql {
      postBy(slug: $slug) {
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
        tags {
          nodes {
            id
            name
            link
          }
        }
        categories {
          nodes {
            id
            name
            link
          }
        }
        featuredImage {
        node {
        mediaItemUrl
        sourceUrl
        imageFile {
            id
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
        }
      }
      }
      }
    }
  }
`
