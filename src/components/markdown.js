import React from "react"
import {graphql, useStaticQuery} from "gatsby"

const Markdown = ({src}) => {
    const data = useStaticQuery(graphql`
    {
          allMarkdownRemark {
            edges {
              node {
                html
                parent {
                  ... on File {
                    relativePath
                  }
                }
              }
            }
          }
    }
    `);

    const match = data.allMarkdownRemark.edges.find(({node}) => src === node.parent.relativePath);

    if (!match) {
        return <div>{src}</div>
    }

    return <div dangerouslySetInnerHTML={{__html: match.node.html}}/>

};

export default Markdown
