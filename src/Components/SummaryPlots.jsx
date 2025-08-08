import { useNavigate } from "react-router-dom";

import {
  VictoryChart,
  VictoryTheme,
  VictoryPie,
  VictoryAxis,
  VictoryLine,
  VictoryBar,
} from "victory";

// docs for event handlers
// https://nearform.com/open-source/victory/docs/guides/events/

export default function SummaryPlots() {
  const navigate = useNavigate();
  const handleClick = (param) => {
    navigate(param);
  };

  return (
    <div className="flex p-4 sm:flex-wrap md:flex-nowrap">
      {/* Mapping Distribution plot */}
      <div className="w-1/3 p-1 mx-1 border-2 border-solid border-slate-300 ">
        <p className="text-bold text-md text-center">Experiments by Assay</p>
        <VictoryPie
          theme={VictoryTheme.material}
          padding={{ top: 0, bottom: 40, left: 60, right: 55 }}
          innerRadius={60}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#000",
              strokeWidth: 1,
            },
            labels: {
              fontSize: 10,
              fill: "#000",
              padding: 16,
            },
          }}
          data={[
            { x: "ATAC", y: 638 },
            { x: "ChIP", y: 659 },
            { x: "RNA", y: 1042 },
            { x: "RRBS", y: 71 },
            { x: "WGBS", y: 458 },
            { x: "microarray", y: 744 },
          ]}
          events={[
            {
              target: "data",
              eventHandlers: {
                onClick: (evt, { datum }) => {
                  {
                    /* console.log("props in plot", datum?.x); */
                  }
                  handleClick(`/explore?Assay=${JSON.stringify([datum.x])}`);
                },
                onMouseOver: () => {
                  return [
                    {
                      mutation: (props) => {
                        return {
                          style: Object.assign({}, props.style, {
                            strokeWidth: 2,
                            fillOpacity: 0.2,
                            cursor: "pointer",
                          }),
                        };
                      },
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      mutation: () => {
                        return null;
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </div>

      <div className="w-1/3 p-1 mx-1 border-2 border-solid border-slate-300">
        <p className="text-bold text-md text-center">Experiments by Tissue</p>
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
          padding={{ top: 0, bottom: 40, left: 65, right: 10 }}
        >
          <VictoryAxis
            style={{
              axis: { stroke: "#756f6a" },
              axisLabel: { fontSize: 11, padding: 30 },
              grid: { stroke: "none" },
              ticks: { stroke: "grey", size: 5 },
              tickLabels: { fontSize: 11, padding: 5 },
            }}
          />
          <VictoryAxis
            dependentAxis
            label={"No. of Datasets"}
            style={{
              axis: { stroke: "#756f6a" },
              axisLabel: { fontSize: 11, padding: 45 },
              grid: { stroke: "grey" },
              ticks: { stroke: "grey", size: 5 },
              tickLabels: { fontSize: 11, padding: 5 },
            }}
          />
          <VictoryBar
            cornerRadius={{ top: 2 }}
            barRatio={0.8}
            style={{
              data: { fill: "#be123c" },
            }}
            data={[
              { x: "Blood", y: 965 },
              { x: "Brain", y: 116 },
              { x: "Cortex", y: 608 },
              { x: "Heart", y: 24 },
              { x: "Liver", y: 1830 },
              { x: "Lung", y: 47 },
              { x: "Skin", y: 22 },
            ]}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onClick: (evt, { datum }) => {
                    {
                      /* console.log("props in plot", datum?.x); */
                    }
                    handleClick(`/explore?Tissue=${JSON.stringify([datum.x])}`);
                  },
                  onMouseOver: () => {
                    return [
                      {
                        mutation: (props) => {
                          return {
                            style: Object.assign({}, props.style, {
                              strokeWidth: 2,
                              fillOpacity: 0.2,
                              cursor: "pointer",
                            }),
                          };
                        },
                      },
                    ];
                  },
                  onMouseOut: () => {
                    return [
                      {
                        mutation: () => {
                          return null;
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </VictoryChart>
      </div>

      <div className="w-1/3 p-1 mx-1 border-2 border-solid border-slate-300">
        <p className="text-bold text-md text-center ">
          Experiments by Exposure
        </p>

        <VictoryPie
          theme={VictoryTheme.material}
          padding={{ top: 0, bottom: 10, left: 55, right: 65 }}
          innerRadius={50}
          labelPlacement="vertical"
          colorScale={[
            "#a6cee3",
            "#1f78b4",
            "#b2df8a",
            "#33a02c",
            "#fb9a99",
            "#e31a1c",
            "#fdbf6f",
            "#ff7f00",
            "#cab2d6",
            "#a0a0a0",
          ]}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#000",
              strokeWidth: 1,
            },
            labels: {
              fontSize: 10,
              fill: "#000",
              padding: 10,
            },
          }}
          data={[
            { x: "Arsenite", y: 100 },
            { x: "DEHP", y: 264 },
            { x: "PM2.5-CHI", y: 223 },
            { x: "PM2.5-JHU", y: 215 },
            { x: "BPA10ug", y: 216 },
            { x: "BPA10mg", y: 230 },
            { x: "Lead", y: 283 },
            { x: "TBT", y: 307 },
            { x: "TCDD", y: 241 },
            { x: "Control", y: 1533 },
          ]}
          events={[
            {
              target: "data",
              eventHandlers: {
                onClick: (evt, { datum }) => {
                  {
                    /* console.log("props in plot", datum?.x); */
                  }
                  handleClick(`/explore?Exposure=${JSON.stringify([datum.x])}`);
                },
                onMouseOver: () => {
                  return [
                    {
                      mutation: (props) => {
                        return {
                          style: Object.assign({}, props.style, {
                            strokeWidth: 2,
                            fillOpacity: 0.2,
                            cursor: "pointer",
                          }),
                        };
                      },
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      mutation: () => {
                        return null;
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </div>
    </div>
  );
}
