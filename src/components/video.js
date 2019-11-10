import React from "react"
import {graphql, useStaticQuery} from "gatsby"

const Video = ({src}) => {

    const data = useStaticQuery(graphql`
    query  {
        allFile (filter: {extension: {eq: "mp4"}}) {
            edges {
                node {
                    publicURL,
                    relativePath
                }
            }
        }
    }`);

    const match = data.allFile.edges.find(({node}) => src === node.relativePath);

    if (!match) {
        return <div>{src}</div>
    }

    return (
        <div style={{
            textAlign: "center"
        }}>
            <video width="320" height="240" controls>
                <source src={match.node.publicURL} type="video/mp4"/>
                Din browser støtter dessverre ikke videoer
            </video>
        </div>
    );

};

export default Video
