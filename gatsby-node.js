/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */




/// Create Wordpress queries
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      wpgraphql {
        posts {
          nodes {
            content
            id
            slug
            }
          }
          pages {
            nodes {
              id
              content
              slug
              uri
            }
          }
        }
    }
  `)

  /// add wp posts routes
  data.wpgraphql.posts.nodes.forEach(node => {
      const slug = node.slug;
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/post.js`),
        context: { slug: slug },
      })
  })

  /// add wp pages routes
  data.wpgraphql.pages.nodes.forEach(node => {
      const slug = node.uri;
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/page.js`),
        context: { slug: slug },
      })
  });

}


//// add images to the filesystem

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WpGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
