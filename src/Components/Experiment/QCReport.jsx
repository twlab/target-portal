import { Button, LinearProgress, Paper, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";

// Custom Components
import ATACSeq from "./Report/ATACSeq";
import RNASeq from "./Report/RNASeq";
import RRBSSeq from "./Report/RRBSSeq";
import WGBSSeq from "./Report/WGBSSeq";
import CHIPSeq from "./Report/CHIPSeq";

export default function QCReport(props) {
  // State management
  const [qcData, setQCData] = useState(null);

  // console.log("PROPS inQC : ", props);

  // Some MAGIC urls until data is moved to s3
  // var multiQC = `https://target.wustl.edu/files${path}/${props.uuid}/multiqc_report.html`;
  // var multiQC = `#`;
  // This is on APIGateways on WASHU AWS: https://us-east-1.console.aws.amazon.com/apigateway/home?region=us-east-1#/apis/pm23d57d8a/resources/lim8d1jb2g
  // Go to APIGateway services and look for : dev-target-devops-rest-api
  // var awsURL = `https://pm23d57d8a.execute-api.us-east-1.amazonaws.com/dev/files/qcreport/${props.uuid}`;

  // Fetch QC Report data
  useEffect(
    () => {
      // Fetch the Assay (bucket/json) folder information
      fetch(props.jsonurl)
        .then((response) => response.json())
        .then((d) => {
          console.log("Main Data", d);
          d.Sample_QC_info ? setQCData(d.Sample_QC_info) : setQCData(d);
        })
        .catch(function (err) {
          console.log("error", err);
        });
    },

    // https://bobbyhadz.com/blog/react-hooks-exhaustive-deps
    // eslint-disable-next-line
    []
  );

  // console.log("QCReport", qcData);
  // console.log("QSSAy", assay);

  return (
    <div className="container">
      {/* Show Report Component based on the assay; (crazy use of ?: operator) */}
      {(props.assay === "ATAC") & (qcData !== null) ? (
        <ATACSeq data={qcData} uuid={props.uuid} />
      ) : (props.assay === "RNA") & (qcData !== null) ? (
        <RNASeq data={qcData} uuid={props.uuid} />
      ) : (props.assay === "RRBS") & (qcData !== null) ? (
        <RRBSSeq data={qcData} uuid={props.uuid} />
      ) : (props.assay === "WGBS") & (qcData !== null) ? (
        <WGBSSeq data={qcData} uuid={props.uuid} />
      ) : (props.assay === "ChIP") & (qcData !== null) ? (
        <CHIPSeq data={qcData} uuid={props.uuid} />
      ) : props.assay === "microarray" ? (
        <></>
      ) : (
        <p className="p-2">
          Fetching Results <LinearProgress />
        </p>
      )}
    </div>
  );
}
