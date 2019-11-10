import React from "react"
import Year from "./year";
import {useYears} from "../timeline";

const Content = () => {
    const years = useYears();

    const map = years.map(node => {
        return <Year key={node.id}  year={node.name}/>
    });

    return <div id="content">{map}</div>
};

export default Content
