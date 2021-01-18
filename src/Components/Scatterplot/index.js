import React, { createRef, useEffect } from "react";
import { scaleLinear, max, axisLeft, axisBottom, select } from "d3";

const RenderCircles = ({ data, scale }) => {
  const renderCircles = data.map((coords, i) => (
    <circle
      cx={scale.x(coords[0])}
      cy={scale.y(coords[1])}
      r="8"
      style={{ fill: "rgba(25, 158, 199, .9)" }}
      key={i}
    />
  ));

  return <g>{renderCircles}</g>;
};

const Axis = ({ axis, scale }) => {
  const node = createRef(axis);

  useEffect(() => {
    if (node.current) {
      select(node.current).call(scale);
    }
  }, [node]);

  return <g ref={node} />;
};

export default ({ data }) => {
  const margin = { top: 20, right: 15, bottom: 60, left: 60 };
  const width = 800 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;

  const x = scaleLinear()
    .domain([
      0,
      max(data, function (d) {
        return d[0];
      }),
    ])
    .range([0, width]);

  const y = scaleLinear()
    .domain([
      0,
      max(data, function (d) {
        return d[1];
      }),
    ])
    .range([height, 0]);

  return (
    <svg
      width={width + margin.right + margin.left}
      height={height + margin.top + margin.bottom}
      className="chart"
    >
      <g
        transform={"translate(" + margin.left + "," + margin.top + ")"}
        width={width}
        height={height}
        className="main"
      >
        <RenderCircles data={data} scale={{ x, y }} />
        <Axis
          axis="x"
          transform={"translate(0," + height + ")"}
          scale={axisBottom().scale(x)}
        />
        <Axis axis="y" transform="translate(0,0)" scale={axisLeft().scale(y)} />
      </g>
    </svg>
  );
};
