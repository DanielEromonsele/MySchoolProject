import { FaEllipsis } from "react-icons/fa6";
import pix from "../assets/pix.jpg";

export const InnerProfile = () => {
  return (
    <div className="w-full  bg-white rounded-lg  ">
      <div className="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <FaEllipsis size={23} />
        </button>
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-600  hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  hover:text-white"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100  hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
          src={pix}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 ">JSS 2B's Class Teacher</span>
        <div className="flex mt-4 md:mt-6">
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-950 rounded-lg hover:border-blue-950 hover:border cursor-pointer transition-all duration-300 hover:text-blue-950 hover:bg-white   focus:ring-blue-800">
            Change Avatar
          </div>
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border text-blue-950 rounded-lg  focus:ring-4 focus:outline-none border-blue-950   hover:text-white transition-all duration-300 cursor-pointer hover:bg-blue-950 focus:ring-gray-700 ms-3">
            Message
          </div>
        </div>
      </div>
    </div>
  );
};
