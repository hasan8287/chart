import React, { useEffect, createRef, useRef } from "react";
import * as d3 from "d3";

export default () => {
  const refChart = createRef(null);
  useEffect(() => {
    if (refChart && refChart.current) {
      const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
      const w = 600;
      const h = 300;
      const svg = d3
        .select(refChart.current)
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("class", "bar");
      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("fill", "navy")
        .attr("class", "sBar")
        .attr("x", (d, i) => i * 60)
        .attr("y", (d, i) => {
          return h - 7 * d;
        })
        .attr("width", 50)
        .attr("height", (d, i) => 7 * d)
        .append("title")
        .text((d) => d);
      svg
        .selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .style("font-size", 18)
        .attr("fill", "red")
        .attr("x", (d, i) => i * 60)
        .attr("y", (d, i) => h - 7 * d - 3)
        .text((d) => d);
    }
  }, [refChart]);

  const styles = {
    container: {
      display: "grid",
      justifyItems: "center",
    },
  };

  return (
    <div ref={refChart} style={styles.container}>
      <h1 style={{ textAlign: "center" }}>Hi, I'm the bar chart</h1>
    </div>
  );
};
