import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

// https://stackoverflow.com/questions/39294424/react-router-execute-custom-function-on-every-link-navigation
// https://www.sitepoint.com/get-url-parameters-with-javascript/
// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);

export default function ListView(props) {
  const { data } = props;
  const { setUrlParams } = useContext(CartContext);
  return (
    <div className="container p-0">
      {data.map((item) => {
        return (
          <Link
            key={item._id}
            to={"/experiment/" + item.experiment_id}
            onClick={() => setUrlParams(window.location.search)}
          >
            <hr className="bg-blue-950 h-[3px]" />
            <div className="flex py-2">
              {/* Left column */}
              <div className="w-1/2">
                <p className=" text-lg font-bold text-blue-600 ">
                  {item.assay} in {item.tissue}
                </p>
                <p className="truncate text-bold text-black">{item.exposure}</p>
                {/* <p className="text-sm leading-6 text-black"></p> */}
                <p className="text-xs leading-5 text-gray-500">
                  {item.sex} / {item.age} old
                </p>
              </div>

              {/* Right column */}
              <div className="w-1/2">
                <p className="truncate text-sm leading-6 text-gray-900">
                  {item.experiment_id} ~ {item.internal_id}
                </p>
                <p className="text-sm leading-6 text-gray-900">{item.strain}</p>
                <p className="text-sm leading-6 text-gray-900">
                  {item.lab} Lab
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
