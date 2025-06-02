import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";
import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
  VictoryBar,
} from "victory";

export default function CHIPSeq(props) {
  const {
    data_information,
    pre_alignment_stats,
    mapping_stats,
    peak_analysis,
    score_values,
    library_complexity,
    mapping_distribution,
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
              Calling Method
            </td>
            <td className="border border-slate-700 px-4 py-1 truncate">
              {data_information.calling_method || "N/A"}
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
        </tbody>
      </table>
      <hr className="bg-blue-950 h-[3px] my-4" />

      {/* Pre Alignment Statistics  */}
      <table className="table-fixed container border-collapse border border-slate-500 divide-y divide-slate-500 mb-2">
        <thead className="bg-slate-500 text-white">
          <tr>
            <th
              className="border border-slate-600 p-2 text-left text-lg"
              colspan={2}
            >
              Pre-Alignment Statistics
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Program-1</td>
            <td className="border border-slate-700 px-4 py-1">
              {pre_alignment_stats.program1 || "N/A"}{" "}
              <small>
                (version: {pre_alignment_stats.program1_version || "N/A"})
              </small>
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Program-2</td>
            <td className="border border-slate-700 px-4 py-1">
              {pre_alignment_stats.program2 || "N/A"}{" "}
              <small>
                (version: {pre_alignment_stats.program2_version || "N/A"})
              </small>
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Total Reads before cutadapt
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {typeof pre_alignment_stats.Total_reads_before_cutadapt ===
              "number"
                ? pre_alignment_stats.Total_reads_before_cutadapt.toLocaleString(
                    "en-US"
                  )
                : "N/A"}
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Written Reads by cutadapt
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {typeof pre_alignment_stats.written_reads_by_cutadapt === "number"
                ? pre_alignment_stats.written_reads_by_cutadapt.toLocaleString(
                    "en-US"
                  )
                : "N/A"}
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Written Reads Percentage
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {pre_alignment_stats.written_reads_percentage || "N/A"}
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
              Post Alignment Tool
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {mapping_stats.post_alignment_program || "N/A"}{" "}
              <small>
                (version:{" "}
                {mapping_stats.post_alignment_program_version || "N/A"})
              </small>{" "}
              <small>
                (parameters:{" "}
                {mapping_stats.post_alignment_program_parameters || "N/A"})
              </small>
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Total Reads</td>
            <td className="border border-slate-700 px-4 py-1">
              {typeof mapping_stats.total_reads_for_mapping === "number"
                ? mapping_stats.total_reads_for_mapping.toLocaleString("en-US")
                : "N/A"}
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Mapped Reads</td>
            <td className="border border-slate-700 px-4 py-1">
              {typeof mapping_stats.mapped_reads === "number"
                ? mapping_stats.mapped_reads.toLocaleString("en-US")
                : "N/A"}
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Uniquely Mapped Reads
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {typeof mapping_stats.uniquely_mapped_reads === "number"
                ? mapping_stats.uniquely_mapped_reads.toLocaleString("en-US")
                : "N/A"}
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Non-Redundant Mapped Reads
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {typeof mapping_stats["non-redundant_mapped_reads"] === "number"
                ? mapping_stats["non-redundant_mapped_reads"].toLocaleString(
                    "en-US"
                  )
                : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
      <hr className="bg-blue-950 h-[3px] my-4" />

      {/* Peak Analysis */}
      <table className="table-fixed container border-collapse border border-slate-500 divide-y divide-slate-500 mb-2">
        <thead className="bg-slate-500 text-white">
          <tr>
            <th
              className="border border-slate-600 p-2 text-left text-lg"
              colspan={2}
            >
              Peak Analysis
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">Software</td>
            <td className="border border-slate-700 px-4 py-1">
              {peak_analysis.peak_calling_software || "N/A"}{" "}
              <small>
                (parameters: qvalue threshold ={" "}
                {peak_analysis.peak_threshold || "N/A"})
              </small>
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              PCR Duplicate Percentage (after alignment){" "}
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {library_complexity.after_alignment_PCR_duplicates_percentage ||
                "N/A"}
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Score Values Number_NR_U_M
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {typeof score_values.Number_NR_U_M === "number"
                ? score_values.Number_NR_U_M.toLocaleString("en-US")
                : "N/A"}
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              Non Redundant Fraction (NRF)
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {score_values["Non_Redundant_Fraction(NRF)"] || "N/A"}
            </td>
          </tr>

          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              PCR Bottlenecking Coefficient-1 (PBC1)
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {score_values["PCR_Bottlenecking_Coefficient_1(PBC1)"] || "N/A"}
            </td>
          </tr>
          <tr className="even:bg-slate-50 odd:bg-slate-200">
            <td className="border border-slate-700 px-4 py-1">
              PCR Bottlenecking Coefficient-2 (PBC2)
            </td>
            <td className="border border-slate-700 px-4 py-1">
              {score_values["PCR_Bottlenecking_Coefficient_2(PBC2)"] || "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
      <hr className="bg-blue-950 h-[3px] my-4" />

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

        {/* Peak length distribution */}
        <div className="w-1/3 py-5 px-2 mx-2 border-2 border-solid border-slate-300">
          <p className="text-bold text-md pb-2 border-b-2">
            Peak Length Distribution
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
