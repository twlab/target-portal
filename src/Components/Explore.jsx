// package imports
import { LinearProgress } from "@mui/material";

// Elastic search imports
// From v4 we don't support regular elasticsearch servers. which is sad.
// https://github.com/appbaseio/reactivesearch/issues/2183#issuecomment-1445890935
//  use npm install @appbaseio/reactivesearch@3.43.6

import {
  DataSearch,
  SelectedFilters,
  ReactiveList,
} from "@appbaseio/reactivesearch";

// custom component imports
import Filters from "./Filters";
// Custom Views
import ListView from "./Views/ListView";

const Explore = () => {
  document.getElementById("root").addEventListener("reload", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Your custom form submission logic here
  });

  return (
    <div className="container mx-auto p-4">
      <div className="md:flex">
        <div className="md:w-1/2 lg:w-1/3  mb-4 md:mb-0 ">
          <div className="bg-blue-900 p-4 rounded-lg ">
            <DataSearch
              className="search-background pb-1"
              innerClass={{ input: "rounded search-bar", list: "search-bar" }}
              componentId="Search"
              dataField={[
                "strain",
                "assay",
                "exposure",
                "assay",
                "tissue",
                "age",
                "lab",
                "experiment_id",
                "internal_id",
                "marker",
              ]}
            />
            <p className="text-md leading-6 text-white pb-1">
              Filter Experiments
            </p>
            <SelectedFilters
              showClearAll={true}
              clearAllLabel="Clear filters"
              URLParams={true}
              innerClass={{
                button: "filters-button",
              }}
              className="py-2"
            />
            <Filters />
          </div>
        </div>

        <div className="md:w-2/3 p-4 mx-4 shadow-inner shadow-slate-400 rounded-lg">
          <ReactiveList
            componentId="SearchResult"
            dataField="experiment"
            react={{
              and: [
                "Assay",
                "Tissue",
                "Exposure",
                "Lab",
                "Search",
                "Sex",
                "Age",
                "Marker",
              ],
            }}
            showResultStats={true}
            pagination={true}
            paginationAt="top"
            size={7}
            loader={<LinearProgress />}
            render={({ data }) => {
              return <ListView data={data} />;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
