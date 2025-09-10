import { useNavigate } from "react-router-dom";
import SummaryPlots from "./SummaryPlots";

export default function Summary() {
  const navigate = useNavigate();
  const handleClick = (param) => {
    navigate(param);
  };

  return (
    <div className="container mx-auto">
      {/* Introduction */}
      <div class="bg-indigo-900 text-white px-6 py-16 md:py-24 text-center relative">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            TaRGET-II Data Portal
          </h1>
          <p class="text-lg md:text-xl mb-8">
            Discover insights, Visualize trends from mouse exposomes
          </p>
        </div>

        <p class="max-w-full px-6 text-center text-lg md:text-xl mb-4">
          The Toxicant Exposures and Responses by Genomic and Epigenomic
          Regulators of Transcription (TaRGET) Program was establised to address
          the role of the environment in disease susceptibility as a function of
          changes to the epigenome. The goals are to enhance our understanding
          of the relationship between exposure-induced perturbations of
          epigenetic marks in target versus surrogate tissues; determine
          conditions where these studies will be valid; and aid in the
          interpretation of the results of such studies.
        </p>

        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <button
            class="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            onClick={() => handleClick("/explore")}
          >
            Browse All Data
          </button>
        </div>
      </div>

      {/* Summary Plots */}
      <div className="p-5 mb-5">
        <SummaryPlots />
        <p className="text-end text-xs pr-5">
          *TCDD = tetrachlorodibenzo-p-dioxin; &nbsp; BPA = bisphenol A; &nbsp;
          TBT = tributyltin; &nbsp; DEHP = di(2-ethylhexyl) phthalate; &nbsp;
          PM2.5 = particulate matter &lt; &nbsp;2.5μm (air pollution); &nbsp; Pb
          = Lead; &nbsp; Arsenite = Arsenic (As)
        </p>
      </div>

      <hr className="bg-blue-950 h-[3px] my-4" />

      {/* Table with data for each tissue. */}
      <p className="pb-2">
        Tissue Dataset Matrix
        <p className="text-sm">
          <em>
            <u>Click on highlighted cells to view experiments</u>
          </em>
        </p>
      </p>
      <div class="overflow-x-auto w-full">
        <table className="table-auto container border-collapse border border-slate-500 divide-y divide-slate-500 mb-5 ">
          <thead className="bg-slate-500 text-white">
            <tr>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Assay
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Experiments
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Blood
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Brain
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Cortex
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Heart
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Liver
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Lung
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Skin
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">ATAC</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["ATAC"]')}
              >
                638
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ATAC"]&Tissue=["Blood"]')
                }
              >
                201
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ATAC"]&Tissue=["Brain"]')
                }
              >
                22
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1 "></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ATAC"]&Tissue=["Liver"]')
                }
              >
                415
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">RNA </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["RNA"]')}
              >
                1025
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RNA"]&Tissue=["Blood"]')
                }
              >
                401
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RNA"]&Tissue=["Brain"]')
                }
              >
                34
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RNA"]&Tissue=["Heart"]')
                }
              >
                24
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RNA"]&Tissue=["Liver"]')
                }
              >
                519
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RNA"]&Tissue=["Lung"]')
                }
              >
                47
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">RRBS</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["RRBS"]')}
              >
                71
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RRBS"]&Tissue=["Blood"]')
                }
              >
                36
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RRBS"]&Tissue=["Liver"]')
                }
              >
                35
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">WGBS</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["WGBS"]')}
              >
                458
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["WGBS"]&Tissue=["Blood"]')
                }
              >
                162
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["WGBS"]&Tissue=["Brain"]')
                }
              >
                60
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["WGBS"]&Tissue=["Cortex"]')
                }
              >
                24
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["WGBS"]&Tissue=["Liver"]')
                }
              >
                190
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["WGBS"]&Tissue=["Skin"]')
                }
              >
                22
              </td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">ChIP</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["ChIP"]')}
              >
                659
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ChIP"]&Tissue=["Liver"]')
                }
              >
                659
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Microarray</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["microarray"]')}
              >
                717
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["microarray"]&Tissue=["Blood"]')
                }
              >
                160
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["microarray"]&Tissue=["Cortex"]')
                }
              >
                557
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table with data for each age. */}
      <p className="pb-2">
        Age Dataset Matrix
        <p className="text-sm">
          <em>
            <u>Click on highlighted cells to view experiments</u>
          </em>
        </p>
      </p>
      <div class="overflow-x-auto w-full">
        <table className="table-auto container border-collapse border border-slate-500 divide-y divide-slate-500 mb-5">
          <thead className="bg-slate-500 text-white">
            <tr>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Assay
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Experiments
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                3 weeks
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                5 weeks
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                20 weeks
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                40 weeks
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">ATAC</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["ATAC"]')}
              >
                638
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ATAC"]&Age=["3 weeks"]')
                }
              >
                233
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ATAC"]&Age=["20 weeks"]')
                }
              >
                405
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">RNA</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["RNA"]')}
              >
                1025
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RNA"]&Age=["3 weeks"]')
                }
              >
                453
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RNA"]&Age=["20 weeks"]')
                }
              >
                450
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RNA"]&Age=["40 weeks"]')
                }
              >
                122
              </td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">RRBS</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["RRBS"]')}
              >
                71
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["RRBS"]&Age=["20 weeks"]')
                }
              >
                71
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">WGBS</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["WGBS"]')}
              >
                458
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1 "></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["WGBS"]&Age=["20 weeks"]')
                }
              >
                458
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">ChIP</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["ChIP"]')}
              >
                659
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ChIP"]&Age=["3 weeks"]')
                }
              >
                33
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ChIP"]&Age=["5 weeks"]')
                }
              >
                35
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ChIP"]&Age=["20 weeks"]')
                }
              >
                558
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["ChIP"]&Age=["40 weeks"]')
                }
              >
                33
              </td>
            </tr>

            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Microarray</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() => handleClick('/explore?Assay=["microarray"]')}
              >
                717
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["microarray"]&Age=["5 weeks"]')
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["microarray"]&Age=["20 weeks"]')
                }
              >
                266
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick('/explore?Assay=["microarray"]&Age=["40 weeks"]')
                }
              >
                445
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="bg-blue-950 h-[3px] my-4" />

      {/* Table with data for Illumina Mouse Array data. */}
      <p className="pb-2">
        Summary of illumina microarray datasets (N = 717)
        <p className="text-sm">
          <em>
            <u>Click on highlighted cells to view experiments</u>
          </em>
        </p>
      </p>
      <div class="overflow-x-auto w-full">
        <table className="table-auto container border-collapse border border-slate-500 divide-y divide-slate-500 mb-5">
          <thead className="bg-slate-500 text-white">
            <tr>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Tissue
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Age
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Sex
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                DEHP
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Lead
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                BPA10ug
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                PM2.5
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                TBT
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                TCDD
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                BPA10mg
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                Blood
              </td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                40 Weeks
              </td>
              <td className="border border-slate-700 px-4 py-1">Female</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Control"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                26
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["DEHP"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Lead"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                14
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TCDD"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10mg"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                4
              </td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Control"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                34
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["DEHP"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Lead"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                14
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10ug"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                2
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TCDD"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10mg"]&Tissue=["Blood"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                2
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1" rowSpan={5}>
                Cortex
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                40 Weeks
              </td>
              <td className="border border-slate-700 px-4 py-1">Female</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Control"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                56
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["DEHP"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Lead"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                14
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10ug"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                11
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["PM2.5-JHU"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                8
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TBT"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                10
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TCDD"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10mg"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Female"]'
                  )
                }
              >
                12
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Control"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                55
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["DEHP"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Lead"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10ug"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["PM2.5-JHU"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TBT"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                24
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TCDD"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10mg"]&Tissue=["Cortex"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                11
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                20 Weeks
              </td>
              <td className="border border-slate-700 px-4 py-1">Female</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Control"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                62
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["DEHP"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                8
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Lead"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10ug"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                12
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TBT"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                8
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TCDD"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10mg"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                14
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Control"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                60
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Control"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                2
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["Lead"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10ug"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                10
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["PM2.5-JHU"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TBT"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                16
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["TCDD"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                12
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["microarray"]&Exposure=["BPA10mg"]&Tissue=["Cortex"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                14
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="bg-blue-950 h-[3px] my-4" />

      {/* Table with data for active markers ChIP data. */}
      <p className="pb-2">
        Summary of ChIP datasets for Active Markers (N=482)
        <p className="text-sm">
          <em>
            <u>Click on highlighted cells to view experiments</u>
          </em>
        </p>
      </p>
      <div class="overflow-x-auto w-full">
        <table className="table-auto container border-collapse border border-slate-500 divide-y divide-slate-500 mb-5">
          <thead className="bg-slate-500 text-white">
            {/* lab names */}
            <tr>
              <th className="border border-slate-600 p-2 text-left text-lg"></th>
              <th className="border border-slate-600 p-2 text-left text-lg"></th>
              <th className="border border-slate-600 p-2 text-left text-lg"></th>
              <th className="border border-slate-600 p-2 text-left text-lg"></th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-orange-500"
                colSpan={2}
              >
                Aylor
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-green-500"
                colSpan={3}
              >
                Bartolomei
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-rose-500"
                colSpan={2}
              >
                Biswal
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-blue-500"
                colSpan={3}
              >
                Dolinoy
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-purple-500"
                colSpan={2}
              >
                Mutlu
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-yellow-500"
                colSpan={2}
              >
                Walker
              </th>
            </tr>
            {/* exposure name */}
            <tr>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Age
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Tissue
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Marks
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Sex
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                TCDD
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                BPA10mg
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                BPA10ug
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                PM2.5
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                DEHP
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Pb
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                PM2.5
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                TBT
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="border border-slate-700 px-4 py-1" rowSpan={7}>
                5 week
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                <small>H3K4me1</small>
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["ChIP"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["5 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["ChIP"]&Exposure=["TCDD"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["5 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                <small>H3K4me3</small>
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["ChIP"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["5 weeks"]&Sex=["Male"]'
                  )
                }
              >
                7
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["ChIP"]&Exposure=["TCDD"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["5 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                <small>H3K27ac</small>
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["ChIP"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["5 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["ChIP"]&Exposure=["TCDD"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["5 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>

            {/* 20 week */}
            <tr>
              <td className="border border-slate-700 px-4 py-1" rowSpan={7}>
                20 week
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                <small>H3K4me1</small>
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                4
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["ChIP"]&Exposure=["PM2.5-JHU"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["ChIP"]&Exposure=["DEHP"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Assay=["ChIP"]&Exposure=["Lead"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["PM2.5-CHI"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["TCDD"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10mg"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10ug"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["PM2.5-JHU"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["DEHP"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                7
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Lead"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["PM2.5-CHI"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                9
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["TBT"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                17
              </td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                <small>H3K4me3</small>
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["PM2.5-JHU"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["DEHP"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Lead"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["PM2.5-CHI"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["TCDD"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10mg"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10ug"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["PM2.5-JHU"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["DEHP"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                7
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Lead"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["PM2.5-CHI"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                9
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["TBT"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                19
              </td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                <small>H3K27ac</small>
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["PM2.5-JHU"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["DEHP"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Lead"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["PM2.5-CHI"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Female"]'
                  )
                }
              >
                6
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["TCDD"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10mg"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10ug"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["PM2.5-JHU"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["DEHP"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                7
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Lead"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["PM2.5-CHI"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                9
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["TBT"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                19
              </td>
            </tr>
            {/* 40 week */}
            <tr>
              <td className="border border-slate-700 px-4 py-1" rowSpan={7}>
                40 weeks
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                <small>H3K4me1</small>
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["Control"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["TCDD"]&Marker=["H3K4me1"]&Tissue=["Liver"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                4
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                <small>H3K4me3</small>
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["Control"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["TCDD"]&Marker=["H3K4me3"]&Tissue=["Liver"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1" rowSpan={2}>
                <small>H3K27ac</small>
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["Control"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["TCDD"]&Marker=["H3K27ac"]&Tissue=["Liver"]&Age=["40 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="bg-blue-950 h-[3px] my-4" />

      {/* Table with data for repressive markersChIP data. */}
      <p className="pb-2">
        Summary of ChIP datasets for Repressive Markers (N=177)
        <p className="text-sm">
          <em>
            <u>Click on highlighted cells to view experiments</u>
          </em>
        </p>
      </p>
      <div class="overflow-x-auto w-full">
        <table className="table-auto container border-collapse border border-slate-500 divide-y divide-slate-500 mb-5">
          <thead className="bg-slate-500 text-white">
            {/* lab names */}
            <tr>
              <th className="border border-slate-600 p-2 text-left text-lg"></th>
              <th className="border border-slate-600 p-2 text-left text-lg"></th>
              <th className="border border-slate-600 p-2 text-left text-lg"></th>
              <th className="border border-slate-600 p-2 text-left text-lg"></th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-orange-500"
                colSpan={2}
              >
                Aylor
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-green-500"
                colSpan={3}
              >
                Bartolomei
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-rose-500"
                colSpan={2}
              >
                Biswal
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-blue-500"
                colSpan={3}
              >
                Dolinoy
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-purple-500"
                colSpan={2}
              >
                Mutlu
              </th>
              <th
                className="border border-slate-600 p-2 text-left text-lg bg-yellow-500"
                colSpan={2}
              >
                Walker
              </th>
            </tr>
            {/* modalities */}
            <tr>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Age
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Tissue
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Marks
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Sex
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                TCDD
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                BPA10mg
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                BPA10ug
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                PM2.5
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                DEHP
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Pb
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                PM2.5
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                Control
              </th>
              <th className="border border-slate-600 p-2 text-left text-lg">
                TBT
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="border border-slate-700 px-4 py-1" rowSpan={5}>
                3 weeks
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td
                className="border border-slate-700 px-4 py-1 text-xs"
                rowSpan={2}
              >
                H3K9me3
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["Control"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["3 weeks"]&Sex=["Female"]'
                  )
                }
              >
                4
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["TBT"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["3 weeks"]&Sex=["Female"]'
                  )
                }
              >
                4
              </td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["Control"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["3 weeks"]&Sex=["Male"]'
                  )
                }
              >
                3
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["TBT"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["3 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td
                className="border border-slate-700 px-4 py-1 text-xs"
                rowSpan={2}
              >
                H3K27me3
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["Control"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["3 weeks"]&Sex=["Female"]'
                  )
                }
              >
                4
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["TBT"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["3 weeks"]&Sex=["Female"]'
                  )
                }
              >
                4
              </td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["Control"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["3 weeks"]&Sex=["Male"]'
                  )
                }
              >
                3
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["TBT"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["3 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
            </tr>
            {/* 20 week */}
            <tr>
              <td className="border border-slate-700 px-4 py-1" rowSpan={5}>
                20 week
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td
                className="border border-slate-700 px-4 py-1 text-xs"
                rowSpan={2}
              >
                H3K9me3
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["Control"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["TCDD"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["Control"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10mg"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                3
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10ug"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                4
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["Control"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["PM2.5-JHU"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Control"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["DEHP"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Lead"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["Control"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["PM2.5-CHI"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["Control"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                2
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["TBT"]&Marker=["H3K9me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                13
              </td>
            </tr>
            {/*  */}
            <tr>
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td
                className="border border-slate-700 px-4 py-1 text-xs"
                rowSpan={2}
              >
                H3K27me3
              </td>
              <td className="border border-slate-700 px-4 py-1">female</td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
              <td className="border border-slate-700 px-4 py-1"></td>
            </tr>
            <tr className="">
              <td className="border border-slate-700 px-4 py-1">Liver</td>
              <td className="border border-slate-700 px-4 py-1">Male</td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["Control"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Aylor"]&Exposure=["TCDD"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["Control"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10mg"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                1
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Bartolomei"]&Exposure=["BPA10ug"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                3
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["Control"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Biswal"]&Exposure=["PM2.5-JHU"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                1
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Control"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                3
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["DEHP"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                1
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Dolinoy"]&Exposure=["Lead"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["Control"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                6
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Mutlu"]&Exposure=["PM2.5-CHI"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                5
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["Control"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                3
              </td>
              <td
                className="border border-slate-700 px-4 py-1 cursor-pointer bg-slate-200 hover:bg-blue-800 hover:text-white"
                onClick={() =>
                  handleClick(
                    '/explore?Lab=["Walker"]&Exposure=["TBT"]&Marker=["H3K27me3"]&Tissue=["Liver"]&Age=["20 weeks"]&Sex=["Male"]'
                  )
                }
              >
                13
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
