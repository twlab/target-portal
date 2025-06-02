import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";
import allTaRGETFiles from "../assets/TaRGET.csv?url";
import { Button } from "@mui/material";

export default function Downloads() {
  return (
    <div className="container mx-auto m-4 p-4">
      <h1 className="text-lg text-bold pb-4">Data Access and Downloads</h1>
      <hr className="bg-blue-950 h-[3px] mb-4" />
      <p className="mb-4 pr-2">
        TaRGET-II data is part of the AWS Open Data Sponsorship Program and
        contains data sets that are publicly available for anyone to access and
        use. No subscription is required.
      </p>
      <button className="border-2 border-solid border-blue-500 px-2 rounded m-1">
        <a href="https://aws.amazon.com/marketplace/pp/prodview-qbrhhmplag53m?sr=0-1&ref_=beagle&applicationId=AWSMPContessa#overview">
          AWS Open Data Registry
          <LaunchSharpIcon fontSize="extrasmall" color="primary" />
        </a>
      </button>
      <button className="border-2 border-solid border-blue-500 px-2 rounded m-1">
        <a href="https://registry.opendata.aws/targetepigenomics/">
          AWS Download Instructions
          <LaunchSharpIcon fontSize="extrasmall" color="primary" />
        </a>
      </button>

      <hr className="bg-blue-950 h-[3px] my-4" />
      <p className="mb-4 pr-2">
        <u>NOTE:</u> Individual files can also be downloaded from the Experiment
        page within this portal using the direct download link or by adding
        multiple files to a download cart.
        <br />
        <em>
          To be FAIR, here is a complete list of all downloadable files and
          their associated metadata hosted on this portal in CSV format{" "}
          <button className="border-2 border-solid border-blue-500 px-2 rounded m-1">
            <a href={allTaRGETFiles} download rel="noopener noreferrer">
              TaRGET.csv {"  "}
              <FileDownloadSharpIcon fontSize="extrasmall" color="primary" />
            </a>
          </button>
        </em>
      </p>
      <hr className="bg-blue-950 h-[3px] my-4" />
    </div>
  );
}
