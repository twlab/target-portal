import React from "react";
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory";

// An attempt at making a nested pie chart using victory charts. This doesn't work.
// Currently, I am just stacking one pie chart over the other.
// It doesn't seem to work with various categories, Victory doesn't support nested pie charts.
// Use the python code to generate a static version for the website.

const NestedPie = () => {
  // Data for the main pie chart (outer circle)
  const mainData = [
    { x: "Category A", y: 10 },
    { x: "Category B", y: 20 },
    { x: "Category C", y: 20 },
  ];

  // Data for the nested pie charts (inner circle)
  const nestedData = [
    [
      { x: "Subcategory A", y: 10 },
      { x: "Subcategory B", y: 20 },
      { x: "Subcategory C", y: 15 },
      { x: "Subcategory D", y: 5 },
    ],
  ];

  return (
    <div className="w-1/3 p-1 mx-1 border-2 border-solid border-slate-300">
      <svg width={400} height={400}>
        <VictoryPie
          standalone={false}
          width={400}
          height={400}
          data={[
            { x: "SubA", y: 10 },
            { x: "SubB", y: 20 },
            { x: "SubC", y: 15 },
            { x: "SubD", y: 5 },
          ]}
          labelComponent={<VictoryLabel dy={-65} />}
          style={{
            labels: { fill: "black", fontSize: 14, fontWeight: "bold" },
          }}
        />
        <VictoryPie
          width={400}
          height={400}
          standalone={false}
          theme={VictoryTheme.material}
          data={[
            { x: "A", y: 30 },
            { x: "B", y: 40 },
            { x: "C", y: 50 },
          ]}
          innerRadius={100}
          style={{ data: { fillOpacity: 1 } }}
        />
      </svg>
    </div>
  );
};

export default NestedPie;
