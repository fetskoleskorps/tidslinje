import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Image = ({src}) => {
    const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {extension: {in: ["jpg","png"]}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
               ...GatsbyImageSharpFluid
              }
              original {
                width
              }
            }
          }
        }
      }
    }`);

    const node = data.images.edges.map(edge => edge.node).find(node => src === node.relativePath);

    if (!node) {
        return <div>{src}</div>
    }

    const childImageSharp = node.childImageSharp;
    return <Img
        fluid={childImageSharp.fluid}
        style={{
            margin: "0 auto",
            maxWidth: childImageSharp.original.width + "px"
        }}/>

};

export default Image
