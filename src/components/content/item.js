import React from "react"
import Image from "../image";
import Markdown from "../markdown";
import Video from "../video";

const Item = ({name, ext, extension, relativePath}) => {
    switch (extension) {
        case "jpg":
        case "png":
            return <Image src={relativePath}/>;
        case "md":
            return <Markdown src={relativePath}/>;
        case "mp4":
            return <Video src={relativePath}/>;
        default:
            return <div>{`${relativePath}/${name}${ext}`}</div>

    }
};

export default Item
