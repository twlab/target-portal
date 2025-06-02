import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";
import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";

export default function Methods() {
  return (
    <div className="container mx-auto m-4 p-4">
      {/* Toxi TaRGET database */}
      <h1 className="text-lg text-bold pb-4">ToxiTaRGET Database</h1>
      <hr className="bg-blue-950 h-[3px] mb-8" />
      <p className="mb-4 pr-2">
        Database of Toxicant Exposures and Responses :
        <a href="http://toxitarget.com/">
          <LaunchSharpIcon className="ml-2" fontSize="small" color="primary" />
        </a>
        <br />
        <small>
          contains in-depth analysis results across all exposures and assays.
        </small>
      </p>
      {/* Protocol Documents */}
      <h1 className="text-lg text-bold py-4 mt-4">Protocol Documents</h1>
      <hr className="bg-blue-950 h-[3px] mb-4" />
      <ul class="list-disc list-outside p-4 ">
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/20200309_ATACseqDocuments.docx"
          >
            ATACseqDocuments.docx
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/20200309_Quality_Control_Parameter.docx"
          >
            Quality Control Parameter.docx
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/20200309_RNAseqDocuments.docx"
          >
            RNAseqDocuments.docx
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/Common_File_Formats_Used_by_the_TaRGET_II_Consortium.docx"
          >
            Common File Formats Used by the TaRGET II Consortium.docx
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/Data_Use_Policy_for_External_Users.docx"
          >
            Data Use Policy for External Users.docx
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/Data_release_policies.docx"
          >
            Data release policies.docx
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/Experimental_procedures.docx"
          >
            Experimental procedures.docx
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
      </ul>

      {/* Standard Operation Procedures */}
      <h1 className="text-lg text-bold py-4 mt-4">
        Standard Operating Procedures
      </h1>
      <hr className="bg-blue-950 h-[3px] mb-4" />
      <ul class="list-disc list-outside p-4 ">
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/standardised_operating_procedures/SOP_Blood_Processing.pdf"
          >
            SOP_Blood_Processing.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/standardised_operating_procedures/SOP_Mouse_liver_collection.pdf"
          >
            SOP_Mouse_liver_collection.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/standardised_operating_procedures/SOP_Whole_mouse_perfusion_blood_protocol.pdf"
          >
            SOP_Whole_mouse_perfusion_blood_protocol.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
      </ul>

      {/* Library Construction Protocols */}
      <h1 className="text-lg text-bold py-4 mt-4">
        Library Construction Protocols
      </h1>
      <hr className="bg-blue-950 h-[3px] mb-4" />
      <ul class="list-disc list-outside p-4 ">
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Aylor_ATACseq_Omni.pdf"
          >
            Aylor_ATACseq_Omni.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Aylor_RNAseq_Kapa.pdf"
          >
            Aylor_RNAseq_Kapa.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Bartolomei_ATACseq_FastATAC.pdf"
          >
            Bartolomei_ATACseq_FastATAC.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Bartolomei_ATACseq_Omni.pdf"
          >
            Bartolomei_ATACseq_Omni.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Bartolomei_RNAseq_Kapa.pdf"
          >
            Bartolomei_RNAseq_Kapa.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Bartolomei_RNAseq_ScriptSeq.pdf"
          >
            Bartolomei_RNAseq_ScriptSeq.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Biswal_ATACseq_FastATAC.pdf"
          >
            Biswal_ATACseq_FastATAC.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Biswal_ATACseq_Omni.pdf"
          >
            Biswal_ATACseq_Omni.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Biswal_RNAseq_TruSeq.pdf"
          >
            Biswal_RNAseq_TruSeq.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Dolinoy_ATACseq_MichiganEpiCore.pdf"
          >
            Dolinoy_ATACseq_MichiganEpiCore.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Dolinoy_RNAseq_TruSeq.pdf"
          >
            Dolinoy_RNAseq_TruSeq.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Mutlu_ATACseq_FastATAC.pdf"
          >
            Mutlu_ATACseq_FastATAC.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Mutlu_ATACseq_Omni.pdf"
          >
            Mutlu_ATACseq_Omni.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Mutlu_RNAseq_TruSeq.pdf"
          >
            Mutlu_RNAseq_TruSeq.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Walker_ATACseq_Omni.pdf"
          >
            Walker_ATACseq_Omni.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/Walker_RNAseq_Truseq.pdf"
          >
            Walker_RNAseq_Truseq.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/ZhibinWang_ATACseq_Omni.pdf"
          >
            ZhibinWang_ATACseq_Omni.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://targetepigenomics.org/docs/library_construction_protocol_perlab/ZhibinWang_RNAseq_TruSeq.pdf"
          >
            ZhibinWang_RNAseq_TruSeq.pdf
            <FileDownloadSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
      </ul>

      {/* Pipelines */}
      <h1 className="text-lg text-bold py-4 mt-4">
        Standardized Pipelines for data processing
      </h1>
      <hr className="bg-blue-950 h-[3px] mb-4" />
      <ul class="list-disc list-outside p-4 ">
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://github.com/Zhang-lab/TaRGET-II-ATACseq-pipeline"
          >
            TaRGET II - ATAC-seq Pipeline
            <LaunchSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4 hover:decoration-blue-500 hover:decoration-2"
            href="https://github.com/Zhang-lab/TaRGET-II-RNAseq-pipeline"
          >
            TaRGET II - RNA-seq Pipeline
            <LaunchSharpIcon
              className="ml-2"
              fontSize="small"
              color="primary"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
