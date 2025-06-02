// Framework imports
import CloudDownloadSharpIcon from "@mui/icons-material/CloudDownloadSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// Context imports
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

export default function Downloads(props) {
  const { cartitems, dispatchCartEvent } = useContext(CartContext);

  // Define headers with custom labels
  const headers = [
    { key: "filesize", label: "File Size" },
    { key: "filetype", label: "File Type" },
    { key: "fileurl", label: "Direct Download" },
  ];

  return (
    <table className="table-fixed container border-collapse border border-slate-500 divide-y divide-slate-500">
      <thead>
        <tr className="bg-slate-500 text-white">
          {headers.map(({ label }) => (
            <th
              key={label}
              className="border border-slate-600 p-2 text-left truncate"
            >
              {label}
            </th>
          ))}
          <th
            key="bulkcart"
            className="border border-slate-600 p-2 text-left truncate"
          >
            Bulk Download
          </th>
        </tr>
      </thead>
      <tbody>
        {props.downloads.map((row, idx) => (
          <tr key={idx} className="even:bg-neutral-50 odd:bg-neutral-100">
            {headers.map(({ key }) => (
              <td
                key={key}
                className="border border-slate-700 px-4 py-1 truncate"
              >
                {key === "fileurl" ? (
                  <a href={row[key]} download>
                    <CloudDownloadSharpIcon
                      className="text-blue-800"
                      fontSize="small"
                    />
                  </a>
                ) : (
                  row[key]
                )}
              </td>
            ))}
            <td
              key="bulkDownload"
              className="border border-slate-700 px-4 py-1 truncate"
            >
              {!cartitems.includes(row["fileurl"]) ? (
                <ShoppingCartOutlinedIcon
                  className="text-blue-800"
                  fontSize="small"
                  onClick={() =>
                    dispatchCartEvent("ADD_TO_CART", {
                      newCartItem: row["fileurl"],
                    })
                  }
                />
              ) : (
                <ShoppingCartSharpIcon
                  className="text-green-600"
                  fontSize="small"
                  onClick={() =>
                    dispatchCartEvent("REMOVE_FROM_CART", {
                      cartItem: row["fileurl"],
                    })
                  }
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
