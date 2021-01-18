import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Scatterplot from "./Components/Scatterplot";
import Histogram from "./Components/Histogram";
import BrarChart from "./Components/BraChart";
import PieChart from "./Components/Pie";
import Force from "./Components/Force/forceGraph";

import dataForce from "./Components/Force/data.json";

function App() {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>     
    <b>${node.name}</b>
  </div>`;
  }, []);

  return (
    <div
      style={{
        padding: "8px",
      }}
    >
      <h3>Scatterplot</h3>
      <Scatterplot
        data={[
          [0, 3],
          [5, 13],
          [10, 22],
          [15, 36],
          [20, 48],
          [25, 59],
          [30, 77],
          [35, 85],
          [40, 95],
          [45, 105],
          [50, 120],
          [55, 150],
          [60, 147],
          [65, 168],
          [70, 176],
          [75, 188],
          [80, 199],
          [85, 213],
          [90, 222],
          [95, 236],
          [100, 249],
        ]}
      />
      <h3>Histogram</h3>
      <BrarChart />
      <h3>Pie</h3>
      <PieChart
        data={[
          {
            data: 0,
            value: 30,
          },
          {
            data: 1,
            value: 50,
          },
          {
            data: 2,
            value: 20,
          },
        ]}
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
      />
      <h3>Force</h3>
      <Force
        linksData={dataForce.links}
        nodesData={dataForce.nodes}
        nodeHoverTooltip={nodeHoverTooltip}
      />
    </div>
  );
}

export default App;
