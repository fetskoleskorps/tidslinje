import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Event from "./event";

const Year = ({year}) => {
    const data = useStaticQuery(graphql`
    {
          allDirectory{
            nodes {
              id
              name
              relativeDirectory
            }
          }
        }
    `);


    const events = data.allDirectory.nodes.filter(node => node.relativeDirectory === year).map(node => {
        return <Event key={node.id}
                      year={year}
                      name={node.name}/>
    });

    return (
        <div
            id={year}
            style={{paddingTop: "2rem"}}
        >
            {events}
        </div>
    );
};

export default Year
