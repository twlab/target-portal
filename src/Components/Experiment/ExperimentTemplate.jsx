// custom components
import Downloads from "./Downloads";
import QCReport from "./QCReport";

export default function ExperimentTemplate(props) {
  const { item } = props;
  return (
    <div className="container m-4 p-8 bg-white shadow shadow-slate-400 rounded-md ">
      <h1 className="text-2xl pb-2">{props.item.experiment_id}</h1>

      <p className="text-md leading-6 pb-8">
        {item.assay || "N/A"} / {item.tissue || "N/A"} / {item.age} /{" "}
        {item.exposure || "N/A"} / {item.lab || "N/A"}
      </p>

      <hr className="bg-blue-950 h-[3px] mb-4" />

      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2 mr-2">
            {/* Mouse Table */}
            <table className="table-fixed container border-collapse border border-slate-500 divide-y divide-slate-500">
              <thead className="bg-slate-500 text-white">
                <tr>
                  <th
                    className="border border-slate-600 p-2 text-left text-lg"
                    colspan={2}
                  >
                    Mouse Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">Assay</td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.assay || "N/A"}{" "}
                    {props.item.assay == "ChIP" ? "- " + props.item.marker : ""}
                  </td>
                </tr>
                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">Tissue</td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.tissue || "N/A"}
                  </td>
                </tr>
                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">Age</td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.age || "N/A"}
                  </td>
                </tr>

                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">Sex</td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.sex || "N/A"}
                  </td>
                </tr>

                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">Strain</td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.strain || "N/A"}
                  </td>
                </tr>
                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">Lab</td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.lab || "N/A"}
                  </td>
                </tr>
                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">
                    Affiliation
                  </td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.affiliation || "N/A"}
                  </td>
                </tr>
                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">
                    Internal ID
                  </td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.internal_id || "N/A"}
                  </td>
                </tr>
                {/* for microarray data */}
                {props.item.assay === "microarray" ? (
                  <>
                    <tr className="even:bg-slate-50 odd:bg-slate-200">
                      <td className="border border-slate-700 px-4 py-1">
                        Percent NA
                      </td>
                      <td className="border border-slate-700 px-4 py-1 ">
                        {props.item.percent_NA || "N/A"}
                      </td>
                    </tr>
                    <tr className="even:bg-slate-50 odd:bg-slate-200">
                      <td className="border border-slate-700 px-4 py-1">
                        Average Methylation
                      </td>
                      <td className="border border-slate-700 px-4 py-1 ">
                        {props.item.ave_methylation || "N/A"}
                      </td>
                    </tr>
                    <tr className="even:bg-slate-50 odd:bg-slate-200">
                      <td className="border border-slate-700 px-4 py-1">
                        Run-ID
                      </td>
                      <td className="border border-slate-700 px-4 py-1 ">
                        {props.item.run || "N/A"}
                      </td>
                    </tr>
                  </>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>

          <div className="w-1/2">
            {/* treatment Details  */}
            <table className="table-fixed container border-collapse border border-slate-500 divide-y divide-slate-500">
              <thead className="bg-slate-500 text-white">
                <tr>
                  <th
                    className="border border-slate-600 p-2 text-left text-lg"
                    colspan={2}
                  >
                    Treatment Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">
                    Exposure
                  </td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.exposure || "N/A"}
                    {props.item.exposure !== "Control"
                      ? " or " + props.item.exposure_name
                      : ""}
                  </td>
                </tr>
                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">
                    Exposure Dosage
                  </td>
                  <td className="border border-slate-700 px-4 py-1">
                    {props.item.exposure_dose || "N/A"}
                  </td>
                </tr>
                <tr className="even:bg-slate-50 odd:bg-slate-200">
                  <td className="border border-slate-700 px-4 py-1">
                    Exposure Paradigm
                  </td>
                  <td className="border border-slate-700 px-4 py-1 ">
                    {props.item.exposure_paradigm || "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr className="bg-blue-950 h-[3px] my-4" />

      <QCReport
        uuid={item.experiment_id}
        jsonurl={item.jsonURL}
        assay={item.assay}
      />

      {item.assay !== "microarray" ? (
        <hr className="bg-blue-950 h-[3px] my-4" />
      ) : (
        <></>
      )}
      <Downloads downloads={props.item.downloads} data={props.item} />
    </div>
  );
}
