import { useEffect, useState } from "react";
import { query } from "../../utils/useFetch";
import { handleQRModalPropsType } from "../../types";
import { useNavigate } from "react-router-dom";
// import Pagination from "../common/Pagination";

type ClientTableProps = {
  handleQRModal: ({ link, isOpen }: handleQRModalPropsType) => void;
};

type ClientType = {
  email: string;
  link: string;
  mobile: string;
  name: string;
  _id: string;
};

const ClientTable = ({ handleQRModal }: ClientTableProps) => {
  const navigate = useNavigate();
  const [clientList, setClientList] = useState<ClientType[]>([]);
  useEffect(() => {
    query(`client/get-lists?cp=1&query=`).then((data) =>
      setClientList(data.data)
    );
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Clients</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Client Info
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Cycle
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Issued / Due
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {!!clientList.length &&
                  clientList.map((client) => {
                    return (
                      <tr key={client._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            {/* <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div> */}
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Name - {client.name}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                Email - {client.email}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                Mobile - {client.mobile}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                Link - {client.link}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            month
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            $20,000
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Sept 28, 2019
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            Due in 3 days
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Paid</span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                          <button
                            title="edit client"
                            type="button"
                            onClick={() =>
                              navigate("/dashboard/edit/" + client._id)
                            }
                            className="inline-block text-white bg-red-400 hover:bg-red-700 p-2 rounded-lg  "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                              />
                            </svg>
                          </button>

                          <button
                            title="generate QR"
                            type="button"
                            className="inline-block ml-2 text-white bg-gray-400 hover:bg-gray-700 p-2 rounded-lg  "
                            onClick={() => {
                              handleQRModal({
                                isOpen: true,
                                link: client.link,
                              });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-qr-code"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 2h2v2H2z" />
                              <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z" />
                              <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z" />
                              <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z" />
                              <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default ClientTable;

{
  /* <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Molly Sanders
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          000004
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 28, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Due in 3 days
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Paid</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                  </td>
                </tr> */
}
{
  /* <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Michael Roberts
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          000003
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$214,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 25, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Due in 6 days
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Paid</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Devin Childs
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          000002
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 14, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Due in 2 weeks
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Pending</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Frederick Nicholas
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          000001
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$12,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 6, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Due 3 weeks ago
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Overdue</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm text-right">
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                  </td>
                </tr> */
}
