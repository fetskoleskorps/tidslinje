import React from "react"

import Layout from "../components/layout"
import Content from "../components/content/content"
import Timeline from "../components/timeline";

const IndexPage = () => (
    <Layout>
        <Timeline />
        <Content/>
    </Layout>
);

export default IndexPage
