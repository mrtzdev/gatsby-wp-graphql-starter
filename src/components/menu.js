import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";


const Menu = () => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        wpgraphql {
          menuItems {
            edges {
              node {
                url
                label
              }
            }
          }
        }
        wpgraphql {
          generalSettings {
            url
          }
        }
      }
    `}
     render={data => (
        <ul className="primary-menu">
        {data.wpgraphql.menuItems.edges.map(( item , index) => (

            <li key={index}>
              <Link key={item.node.url} to={item.node.url.replace(
                data.wpgraphql.generalSettings.url,
                ""
              )} activeClassName="active">
                  {item.node.label}
              </Link>
            </li>

        ))
      }
        </ul>
      )}
/>
);

export default Menu;
