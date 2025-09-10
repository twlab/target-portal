import { ReactiveBase, ReactiveList } from "@appbaseio/reactivesearch";
import { useParams } from "react-router-dom";
import ExperimentTemplate from "./ExperimentTemplate";

export default function ExperimentBase() {
  const ESCLUSTER = import.meta.env.VITE_ESCLUSTER;
  const INDEX = import.meta.env.VITE_ESINDEX;
  const CREDENTIALS = import.meta.env.VITE_ESCREDENTIALS;

  // Retrieve the url-params from react-router.
  let { id } = useParams();

  return (
    // Credentials are from .env 
    // Fetch data through a custom query matching the experiment id.
    <ReactiveBase
      url={ESCLUSTER}
      app={INDEX}
      credentials={CREDENTIALS}
      className="container"
    >
      <ReactiveList
        componentId="experiment_id"
        defaultQuery={function () {
          return {
            query: {
              match: { experiment_id: id },
            },
          };
        }}
        dataField="_id"
        title="ReactiveList"
        showResultStats={false}
        loader={"Loading ...."}
        size={10}
        renderItem={(res) => {
          // Return a populated experiment template component.
          return <ExperimentTemplate item={res} />;
        }}
      />
    </ReactiveBase>
  );
}
