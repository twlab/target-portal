import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";
import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
  VictoryBar,
} from "victory";

export default function ATACSeq(props) {
  const {
    data_information,
    mapping_stats,
    mapping_distribution,
    insertion_size_distribution,
    peak_length_distribution,
  } = props.data;

  // Generate plot data for mapping distribution
  let mDist = [];
  for (const [key, value] of Object.entries(
    mapping_distribution[
      "Percentage_of_non-redundant_uniquely_mapped_reads_in_autosome"
    ]
  )) {
    mDist.push({ x: key, y: value });
  }

  // Generate plot data for ATAC peak width distribution
  let peakDist = [];
  for (let i = 0; i < peak_length_distribution.density.length; i++) {
    peakDist.push({
      x: peak_length_distribution.peak_length[i],
      y: peak_length_distribution.density[i],
    });
  }

  // There are other qc information that I am not showing here.
  return (
    <>
      {/* General Information */}
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
            <td className="border border-slate-700 px-4 py-1 truncate">
              {data_information.Docker_image_id || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Bash Script MD5
            </td>
            <td className="border border-slate-700 px-4 py-1 truncate">
              {data_information.bash_script_MD5 || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Report ID</td>
            <td className="border border-slate-700 px-4 py-1 truncate">
              {props.uuid}
            </td>
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
                  href="https://github.com/Zhang-lab/ATAC-seq_QC_analysis/blob/master/README.md"
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

      {/* Sequencing Stats */}
      <table className="table-fixed container border-collapse border border-slate-500 divide-y divide-slate-500 mb-2">
        <thead className="bg-slate-500 text-white">
          <tr>
            <th
              className="border border-slate-600 p-2 text-left text-lg"
              colspan={2}
            >
              Sequencing Stats
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Alignment</td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.alignment_program_parameters || "N/A"}{" "}
              <small>
                ({mapping_stats.alignment_program || "N/A"} -{" "}
                {mapping_stats.alignment_program_version})
              </small>
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Post Alignment
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.post_alignment_program_parameters || "N/A"}{" "}
              <small>
                ({mapping_stats.post_alignment_program || "N/A"} -{" "}
                {mapping_stats.post_alignment_program_version})
              </small>
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Total Reads</td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.total_reads.toLocaleString("en-US")}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Mapped Reads</td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.mapped_reads.toLocaleString("en-US")}{" "}
              <small>
                (
                {Math.round(
                  (mapping_stats.mapped_reads / mapping_stats.total_reads) * 100
                )}
                %)
              </small>
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Uniquely Mapped Reads
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.uniquely_mapped_reads.toLocaleString("en-US")}{" "}
              <small>
                (
                {Math.round(
                  (mapping_stats.uniquely_mapped_reads /
                    mapping_stats.total_reads) *
                    100
                )}
                %)
              </small>
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Non-redundant Mapped Reads
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats["non-redundant_mapped_reads"].toLocaleString(
                "en-US"
              )}{" "}
              <small>
                (
                {Math.round(
                  (mapping_stats["non-redundant_mapped_reads"] /
                    mapping_stats.total_reads) *
                    100
                )}
                %)
              </small>
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Useful Single Reads
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.useful_single_ends.toLocaleString("en-US")}{" "}
              <small>
                (
                {Math.round(
                  (mapping_stats.useful_single_ends /
                    mapping_stats.total_reads) *
                    100
                )}
                %)
              </small>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Plots */}
      <div className="flex container p-4">
        {/* Mapping Distribution plot */}
        <div className="w-1/3 py-5 px-2 mx-2 border-2 border-solid border-slate-300">
          <p className="text-bold text-md pb-2 border-b-2">
            Mapping Distribution
          </p>

          <VictoryChart
            domainPadding={10}
            theme={VictoryTheme.material}
            padding={{ top: 0, bottom: 40, left: 60, right: 15 }}
          >
            <VictoryBar
              cornerRadius={{ top: 3 }}
              horizontal
              barRatio={0.8}
              style={{
                data: { fill: "#4caf50" },
              }}
              data={mDist}
            />
            <VictoryAxis
              label="Chromosomes"
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
              label={"Non-redundant uniquely mapped autosome reads (%)"}
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 25 },
                grid: { stroke: "grey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
            />
          </VictoryChart>
        </div>

        {/* Insert Size Plot */}
        <div className="w-1/3 py-5 px-2 mx-2 border-2 border-solid border-slate-300">
          <p className="text-bold text-md pb-2 border-b-2">
            Insert Size Distribution
          </p>

          <VictoryChart
            domainPadding={10}
            theme={VictoryTheme.material}
            padding={{ top: 0, bottom: 40, left: 60, right: 15 }}
          >
            <VictoryLine
              style={{
                data: { stroke: "#4caf50" },
              }}
              data={insertion_size_distribution.density}
              domain={{ x: [0, 500] }}
            />
            <VictoryAxis
              label=""
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 45 },
                grid: { stroke: "lightgrey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
              tickCount={8}
            />
            <VictoryAxis
              dependentAxis
              label={""}
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 25 },
                grid: { stroke: "lightgrey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
            />
          </VictoryChart>
        </div>

        {/* Peak length distribution */}
        <div className="w-1/3 py-5 px-2 mx-2 border-2 border-solid border-slate-300">
          <p className="text-bold text-md pb-2 border-b-2">
            ATAC-seq Peak width Distribution
          </p>

          <VictoryChart
            domainPadding={10}
            theme={VictoryTheme.material}
            padding={{ top: 0, bottom: 40, left: 60, right: 15 }}
          >
            <VictoryLine
              style={{
                data: { stroke: "#4caf50" },
              }}
              data={peakDist}
            />
            <VictoryAxis
              label=""
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 45 },
                grid: { stroke: "lightgrey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
            />
            <VictoryAxis
              dependentAxis
              label={""}
              style={{
                axis: { stroke: "#756f6a" },
                axisLabel: { fontSize: 11, padding: 25 },
                grid: { stroke: "lightgrey" },
                ticks: { stroke: "grey", size: 5 },
                tickLabels: { fontSize: 11, padding: 5 },
              }}
            />
          </VictoryChart>
        </div>
      </div>
    </>
  );
}
