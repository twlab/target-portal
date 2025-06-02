import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";
import { Stack } from "@mui/material";
import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
  VictoryBar,
} from "victory";

export default function RNASeq(props) {
  const {
    data_information,
    mapping_stats,
    yield_distribution,
    gene_body_covergae,
    RseQC_report,
  } = props.data;

  //   generate the yield distribution data for plotting.
  let yieldDistinction = [];
  for (let j = 0; j < yield_distribution.total_reads.length; j++) {
    yieldDistinction.push({
      x: yield_distribution.total_reads[j],
      y: yield_distribution.expected_distinction[j],
    });
  }

  //   generate the readDist data for plotting
  let readDist = [];
  for (const [key, value] of Object.entries(RseQC_report.reads_distribution)) {
    readDist.push({ x: key.replace(/_/g, " "), y: value });
  }

  let spliceData = [];
  for (const [key, value] of Object.entries(mapping_stats.number_of_splice)) {
    spliceData.push(
      <tr className="even:bg-slate-50 odd:bg-slate-200">
        <td className="border border-slate-700 px-4 py-1">{key}</td>
        <td className="border border-slate-700 px-4 py-1">
          {value.toLocaleString("en-US")}
        </td>
      </tr>
    );
  }

  return (
    <>
      {/* General Information and Statistics*/}
      <table className="table-fixed container border-collapse border border-slate-500 divide-y divide-slate-500 mb-2">
        <thead className="bg-slate-500 text-white">
          <tr>
            <th
              className="border border-slate-600 p-2 text-left text-lg"
              colspan={2}
            >
              General Information
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Genome</td>
            <td className="border border-slate-700 px-4 py-1">
              {data_information.genome || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Read Type</td>
            <td className="border border-slate-700 px-4 py-1">
              {data_information.read_type || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Pipeline Version
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {data_information.pipe_version || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Docker Image ID
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {data_information.Docker_image_id || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Bash Script MD5
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {data_information.bash_script_MD5 || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Report ID</td>
            <td className="border border-slate-700 px-4 py-1">{props.uuid}</td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Processed On</td>
            <td className="border border-slate-700 px-4 py-1">
              {data_information.running_time.replace(/_/g, " ") || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Pipeline Documentation
            </td>
            <td className="border border-slate-700 px-4 py-1">
              <span>
                <a
                  href="https://github.com/Zhang-lab/RNA-seq_QC_analysis/blob/master/README.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LaunchSharpIcon fontSize="small" color="primary" />
                </a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="bg-blue-950 h-[3px] my-4" />
      {/* Mapping Statistics  */}
      <table className="table-fixed container border-collapse border border-slate-500 divide-y divide-slate-500 mb-2">
        <thead className="bg-slate-500 text-white">
          <tr>
            <th
              className="border border-slate-600 p-2 text-left text-lg"
              colspan={2}
            >
              Mapping Statistics
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Alignment Tool
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.alignment_program || "N/A"}{" "}
              <small>
                (version: {mapping_stats.alignment_program_version || "N/A"})
              </small>
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Alignment Parameters
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.alignment_program_parameters || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Reads Aligned Exactly 1-time
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.reads_aligned_exactly_1_time.toLocaleString(
                "en-US"
              ) || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Reads Aligned &gt; 1-time
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.reads_aligned_greater_than_1_time.toLocaleString(
                "en-US"
              ) || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Average Reads Length
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.average_reads_length || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Uniquely Mapped Ratio
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.uniquely_mapped_ratio || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Reads Aligned 0-times
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.reads_aligned_0_time.toLocaleString("en-US") ||
                "N/A"}
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="bg-blue-950 h-[3px] my-4" />
      {/* Splicing information  */}
      <table className="table-fixed container border-collapse border border-slate-500 divide-y divide-slate-500 mb-2">
        <thead className="bg-slate-500 text-white">
          <tr>
            <th
              className="border border-slate-600 p-2 text-left text-lg"
              colspan={2}
            >
              Number of Splices
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {spliceData}
        </tbody>
      </table>

      <hr className="bg-blue-950 h-[3px] my-4" />
      {/* Plots */}
      <div className="flex container p-4">
        {/* Mapping Distribution plot */}
        <div className="w-1/3 py-5 px-2 mx-2 border-2 border-solid border-slate-300">
          <p className="text-bold text-md pb-2 border-b-2">Read Distribution</p>

          <VictoryChart
            domainPadding={10}
            theme={VictoryTheme.material}
            padding={{ top: 0, bottom: 40, left: 90, right: 0 }}
          >
            <VictoryBar
              cornerRadius={{ top: 3 }}
              horizontal
              barRatio={0.8}
              style={{
                data: { fill: "#4caf50" },
              }}
              data={readDist}
            />
            <VictoryAxis
              label=""
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 45 },
                grid: { stroke: "none" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
            />
            <VictoryAxis
              dependentAxis
              label="Reads"
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 25 },
                grid: { stroke: "grey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
              tickFormat={(t) => `${Math.round(t / 1000000)}M`}
            />
          </VictoryChart>
        </div>

        {/* Insert Size Plot */}
        <div className="w-1/3 py-5 px-2 mx-2 border-2 border-solid border-slate-300">
          <p className="text-bold text-md pb-2 border-b-2">
            Expected Yield Distribution
          </p>

          <VictoryChart
            domainPadding={10}
            theme={VictoryTheme.material}
            padding={{ top: 10, bottom: 50, left: 50, right: 10 }}
          >
            <VictoryLine
              style={{
                data: { stroke: "#4caf50" },
              }}
              data={yieldDistinction}
            />
            <VictoryAxis
              label="Total Reads"
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 30 },
                grid: { stroke: "lightgrey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
              tickFormat={(t) => `${Math.round(t / 1000000)}M`}
            />
            <VictoryAxis
              dependentAxis
              label="Expected Distinction"
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 35 },
                grid: { stroke: "lightgrey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
              tickFormat={(t) => `${Math.round(t / 1000000)}M`}
            />
          </VictoryChart>
        </div>

        {/* Peak length distribution */}
        <div className="w-1/3 py-5 px-2 mx-2 border-2 border-solid border-slate-300">
          <p className="text-bold text-md pb-2 border-b-2">
            Gene Body Coverage
          </p>
          <VictoryChart
            domainPadding={10}
            theme={VictoryTheme.material}
            padding={{ top: 10, bottom: 50, left: 55, right: 5 }}
          >
            <VictoryLine
              style={{
                data: { stroke: "#4caf50" },
              }}
              data={gene_body_covergae.coverage}
            />
            <VictoryAxis
              label="Percentile"
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 30 },
                grid: { stroke: "lightgrey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
            />
            <VictoryAxis
              dependentAxis
              label="Coverage"
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 45 },
                grid: { stroke: "lightgrey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
              tickFormat={(t) => `${Math.round(t / 1000)}k`}
            />
          </VictoryChart>
        </div>
      </div>
    </>
  );
}
