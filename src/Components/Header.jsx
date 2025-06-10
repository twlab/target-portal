import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Stack, Badge, Drawer, Tooltip, Divider } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

// contextAPI
import { CartContext } from "../Contexts/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { cartitems, urlparams, dispatchCartEvent } = useContext(CartContext);

  const [drawer, setDrawer] = useState(false);

  function handleDownload() {
    // reference to create a text file using javascript on the front-end
    // https://stackoverflow.com/questions/44656610/download-a-string-as-txt-file-in-react/44661948#44661948

    // creating the content for the batchDownload
    let content = cartitems.map((item) => {
      let outfileName = item.split("/");
      let string =
        "url=" +
        item +
        "\noutput=" +
        outfileName[outfileName.length - 1] +
        "\n";
      return string;
    });

    // creating the text file with appropriat urls and initiate download
    const element = document.createElement("a");
    const file = new Blob(content, { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "TaRGETBatchDownloads.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  // console.log("URL PARAMS", urlparams);

  return (
    <>
      <Drawer anchor="top" open={drawer} onClose={() => setDrawer(false)}>
        <div className="p-8">
          <p>
            Clicking <u>Bulk Download</u> downloads a{" "}
            <strong>TaRGETBatchDownloads.txt</strong> file containing a list of
            URLs to all datasets in your cart.
          </p>
          <p className="pb-4">
            use below command from a terminal to start downloading your
            datasets. <br />
            <strong>curl -k -K TaRGETBatchDownloads.txt</strong>
          </p>
          <hr className="bg-blue-950 h-[3px]" />

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <p className="text-bold p-2">
              {cartitems.length} dataset(s) in your cart
            </p>

            <Tooltip title="empty cart">
              <RemoveShoppingCartIcon
                color="error"
                fontSize="small"
                onClick={() => dispatchCartEvent("CLEAR_CART", {})}
              />
            </Tooltip>
          </Stack>
          <hr className="bg-blue-950 h-[3px]" />

          <table className="table-auto container border-collapse border border-slate-500 divide-y divide-slate-500 my-4">
            <thead className="bg-slate-500 text-white">
              <tr>
                <th className="border border-slate-600 p-2 text-left text-md">
                  Remove item
                </th>
                <th className="border border-slate-600 p-2 text-left text-md">
                  File URL
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cartitems.map((item) => {
                return (
                  <tr className="even:bg-slate-50 odd:bg-slate-200">
                    <td className="border border-slate-700 px-4 py-1">
                      {" "}
                      <RemoveShoppingCartIcon
                        color="error"
                        fontSize="small"
                        onClick={() =>
                          dispatchCartEvent("REMOVE_FROM_CART", {
                            cartItem: item,
                          })
                        }
                      />
                    </td>
                    <td className="border border-slate-700 px-4 py-1 truncate">
                      {item}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <Stack direction="row" spacing={1} alignItems="center">
            <button
              className="bg-blue-800 text-white px-2 py-1 rounded"
              onClick={handleDownload}
            >
              Bulk Download
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => setDrawer(false)}
            >
              Close
            </button>
          </Stack>
        </div>
      </Drawer>

      <header className="text-white p-4 bg-indigo-950 sticky top-0 z-40">
        <div className="flex items-center justify-around">
          <div className="text-xl font-bold">
            {urlparams !== "" ? (
              <Link to={"/" + urlparams}>TaRGET-II Data Portal</Link>
            ) : (
              <Link to="/">TaRGET-II Data Portal</Link>
            )}
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="hidden sm:flex space-x-4">
            <Link
              to="/about"
              className="text-white hover:underline hover:underline-offset-4 hover:decoration-rose-500 hover:decoration-2"
            >
              About
            </Link>
            <Link
              to="/methods"
              className="text-white hover:underline hover:underline-offset-4 hover:decoration-rose-500 hover:decoration-2"
            >
              Methods
            </Link>
            <Link
              to="/explore"
              className="text-white hover:underline hover:underline-offset-4 hover:decoration-rose-500 hover:decoration-2"
            >
              Explore
            </Link>
            <a
              href="https://epigenomegateway.wustl.edu/browser2022/?genome=mm10&hub=https://wangcluster.wustl.edu/~pkuntala/targethub.json"
              target="_blank"
              className="text-white hover:underline hover:underline-offset-4 hover:decoration-rose-500 hover:decoration-2"
            >
              TrackHub
            </a>
            <Link
              to="/downloads"
              className="text-white hover:underline hover:underline-offset-4 hover:decoration-rose-500 hover:decoration-2"
            >
              Downloads
            </Link>

            {/* Show the cart icon with no.of items inside as a badge */}
            {cartitems.length <= 0 ? (
              ""
            ) : (
              <Badge
                badgeContent={cartitems.length}
                color="success"
                onClick={() => setDrawer(true)}
              >
                <ShoppingCartSharpIcon
                  className="text-yellow-400"
                  fontSize="medium"
                />
              </Badge>
            )}
          </nav>
        </div>
        {/* Burger menu for smaller screens */}
        {isOpen && (
          <div className="sm:hidden mt-2 space-y-2">
            <Link
              to="/about"
              className="block text-whte hover:underline hover:underline-offset-4 hover:decoration-rose-500 hover:decoration-2"
            >
              About
            </Link>
            <Link
              to="/methods"
              className="block text-whte hover:underline hover:underline-offset-4 hover:decoration-rose-500 hover:decoration-2"
            >
              Methods
            </Link>
            <Link
              to="/downloads"
              className="block text-whte hover:underline hover:underline-offset-4 hover:decoration-rose-500 hover:decoration-2"
            >
              Downloads
            </Link>
            {/* Show the cart icon with no.of items inside as a badge */}
            {cartitems.length <= 0 ? (
              ""
            ) : (
              <Badge
                badgeContent={cartitems.length}
                color="success"
                onClick={() => setDrawer(true)}
              >
                <ShoppingCartSharpIcon
                  className="text-yellow-400"
                  fontSize="medium"
                />
              </Badge>
            )}
          </div>
        )}
      </header>
    </>
  );
}
