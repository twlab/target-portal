import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { MultiList } from "@appbaseio/reactivesearch";

export default function Filters() {
  const [expanded, setExpanded] = useState("exposure");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* Exposure */}
      <Accordion
        elevation={0}
        square
        disableGutters
        expanded={expanded === "exposure"}
        onChange={handleChange("exposure")}
        sx={{ border: `1px solid lightgray`, marginBottom: 0.5 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="exposurebh-content"
          id="exposurebh-header"
          sx={{
            background: "#fafafa",
            borderBottom: `1px solid gray`,
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Exposure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultiList
            className="filter-width"
            componentId="Exposure"
            dataField="exposure.keyword"
            size={250}
            sortBy="asc"
            queryFormat="or"
            showCheckbox={true}
            showCount={true}
            showSearch={false}
            react={{
              and: [
                "Tissue",
                "Assay",
                "Lab",
                "Search",
                "Age",
                "Experiment",
                "Sex",
                "Marker",
              ],
            }}
            showFilter={true}
            filterLabel="Exposure"
            URLParams={true}
            innerClass={{
              label: "list-item",
              input: "list-input",
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Assay  */}
      <Accordion
        elevation={0}
        square
        disableGutters
        expanded={expanded === "assay"}
        onChange={handleChange("assay")}
        sx={{ border: `1px solid lightgray`, marginBottom: 0.5 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="assay-content"
          id="assay-header"
          sx={{
            background: "#fafafa",
            borderBottom: `1px solid gray`,
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Assay</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultiList
            componentId="Assay"
            dataField="assay.keyword"
            className="genres-filter"
            size={20}
            sortBy="asc"
            queryFormat="or"
            showCheckbox={true}
            showCount={true}
            showSearch={false}
            react={{
              and: [
                "Tissue",
                "Exposure",
                "Lab",
                "Search",
                "Age",
                "Experiment",
                "Sex",
                "Marker",
              ],
            }}
            filterLabel="Assay"
            URLParams={true}
            innerClass={{
              label: "list-item",
              input: "list-input",
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Tissues  */}
      <Accordion
        elevation={0}
        square
        disableGutters
        expanded={expanded === "tissue"}
        onChange={handleChange("tissue")}
        sx={{ border: `1px solid lightgray`, marginBottom: 0.5 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="tissue-content"
          id="tissue-header"
          sx={{
            background: "#fafafa",
            borderBottom: `1px solid gray`,
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Tissue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultiList
            componentId="Tissue"
            dataField="tissue.keyword"
            className="genres-filter"
            size={20}
            sortBy="asc"
            queryFormat="or"
            showCheckbox={true}
            showCount={true}
            showSearch={false}
            react={{
              and: [
                "Exposure",
                "Assay",
                "Lab",
                "Search",
                "Age",
                "Experiment",
                "Sex",
                "Marker",
              ],
            }}
            showFilter={true}
            filterLabel="Tissue"
            URLParams={true}
            innerClass={{
              label: "list-item",
              input: "list-input",
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Lab */}
      <Accordion
        elevation={0}
        square
        disableGutters
        expanded={expanded === "lab"}
        onChange={handleChange("lab")}
        sx={{ border: `1px solid lightgray`, marginBottom: 0.5 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="labbh-content"
          id="labbh-header"
          sx={{
            background: "#fafafa",
            borderBottom: `1px solid gray`,
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Lab</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultiList
            className="filter-width"
            componentId="Lab"
            dataField="lab.keyword"
            size={20}
            sortBy="asc"
            queryFormat="or"
            showCheckbox={true}
            showCount={true}
            showSearch={false}
            placeholder="Search for Lab"
            react={{
              and: [
                "Tissue",
                "Exposure",
                "Assay",
                "Search",
                "Age",
                "Experiment",
                "Sex",
                "Marker",
              ],
            }}
            showFilter={true}
            filterLabel="Lab"
            URLParams={true}
            innerClass={{
              label: "list-item",
              input: "list-input",
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Age */}
      <Accordion
        elevation={0}
        square
        disableGutters
        expanded={expanded === "age"}
        onChange={handleChange("age")}
        sx={{ border: `1px solid lightgray`, marginBottom: 0.5 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="agebh-content"
          id="agebh-header"
          sx={{
            background: "#fafafa",
            borderBottom: `1px solid gray`,
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Age</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultiList
            componentId="Age"
            dataField="age.keyword"
            className=""
            size={20}
            sortBy="asc"
            queryFormat="or"
            showCheckbox={true}
            showCount={true}
            react={{
              and: [
                "Tissue",
                "Exposure",
                "Assay",
                "Lab",
                "Search",
                "Experiment",
                "Sex",
                "Marker",
              ],
            }}
            showSearch={false}
            filterLabel="Age"
            URLParams={true}
            innerClass={{
              label: "list-item",
              input: "list-input",
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Sex  */}
      <Accordion
        elevation={0}
        square
        disableGutters
        expanded={expanded === "sex"}
        onChange={handleChange("sex")}
        sx={{ border: `1px solid lightgray`, marginBottom: 0.5 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="sexbh-content"
          id="sexbh-header"
          sx={{
            background: "#fafafa",
            borderBottom: `1px solid gray`,
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Sex</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultiList
            className="filter-width"
            componentId="Sex"
            dataField="sex.keyword"
            size={20}
            sortBy="asc"
            queryFormat="or"
            showCheckbox={true}
            showCount={true}
            showSearch={false}
            react={{
              and: [
                "Tissue",
                "Exposure",
                "Assay",
                "Lab",
                "Search",
                "Age",
                "Experiment",
                "Marker",
              ],
            }}
            showFilter={true}
            filterLabel="Sex"
            URLParams={true}
            innerClass={{
              label: "list-item",
              input: "list-input",
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Marker  */}
      <Accordion
        elevation={0}
        square
        disableGutters
        expanded={expanded === "marker"}
        onChange={handleChange("marker")}
        sx={{ border: `1px solid lightgray`, marginBottom: 0.5 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="markerbh-content"
          id="markerbh-header"
          sx={{
            background: "#fafafa",
            borderBottom: `1px solid gray`,
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Histone Marks
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultiList
            className="filter-width"
            componentId="Marker"
            dataField="marker.keyword"
            size={20}
            sortBy="asc"
            queryFormat="or"
            showCheckbox={true}
            showCount={true}
            showSearch={false}
            react={{
              and: [
                "Tissue",
                "Exposure",
                "Assay",
                "Lab",
                "Search",
                "Age",
                "Experiment",
                "Sex",
              ],
            }}
            showFilter={true}
            filterLabel="Marker"
            URLParams={true}
            innerClass={{
              label: "list-item",
              input: "list-input",
            }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
