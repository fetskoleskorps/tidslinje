import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Item from "./item";

const Event = ({year, name}) => {
    const data = useStaticQuery(graphql`
     {
          allFile (sort: {fields: name}) {
            edges {
              node {
                id
                name
                ext
                extension
                relativePath
                relativeDirectory
              }
            }
          }
        }
    `);
    const events = data.allFile.edges.map(edge => edge.node).filter(node => node.relativeDirectory === `${year}/${name}`).map(node => {
        return (
            <div key={node.id} style={{marginBottom: "1rem"}}>
                <Item key={node.id} c {...node} />
            </div>
        );
    });

    return (
        <div style={{marginBottom: "2rem"}}>
            <h3>{name}</h3>
            {events}
        </div>
    );
};

export default Event;
