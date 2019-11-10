import React from "react"
import {graphql, useStaticQuery} from "gatsby";
import "./timeline.css"

export const useYears = () => {
    const data = useStaticQuery(graphql`
    {
          allDirectory (filter: {relativeDirectory: {eq: ""}}) {
            nodes {
              id
              name
              relativeDirectory
            }
          }
        }
    `);
    const nodes = [...data.allDirectory.nodes];
    nodes.sort((a, b) => parseInt(a.name) - parseInt(b.name));
    return nodes;
}


class TimelineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollProgress = () => {
        const documentElement = document.documentElement;
        const scrollPx = documentElement.scrollTop;
        const winHeightPx = documentElement.scrollHeight - documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;
        const contentHeight = document.getElementById("content").clientHeight;
        const timelineHeight = document.getElementById("timeline").clientHeight - 20;

        const margins = this.props.years.reduce((map, year) => {
            const yearElement = document.getElementById(year);
            const timelineElementHeight = yearElement ? timelineHeight * yearElement.clientHeight / contentHeight : 0;
            return {
                ...map,
                [year]: timelineElementHeight
            };
        }, {});

        this.setState({
            scrolled: scrolled,
            margins: margins
        });
    };

    render() {
        const progressContainerStyle = {
            background: "#bbdeff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            position: "absolute",
            top: 0,
            left: "-8px",
            bottom: 0,
            width: "4px",
            zIndex: 99
        };

        const progressBarStyle = {
            background: "#417DD2",
            height: this.state.scrolled
        };

        const margins = this.state.margins || {};

        const timelineItems = this.props.years.map(year => {
            return <a key={year} href={`#${year}`} style={{
                height: margins[year] + "px"
            }}>{year}</a>
        });

        return (
            <nav id="timeline" className="timeline">
                <div className="progress-container" style={progressContainerStyle}>
                    <div className="progress-bar" style={progressBarStyle}/>
                </div>
                {timelineItems}
            </nav>
        );
    }
}


const Timeline = () => {
    const years = useYears().map((node) => node.name);
    return <TimelineComponent years={years}/>;
};

export default Timeline
