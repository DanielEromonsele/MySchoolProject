import Input from "../components/reUse/Input";

const Table = () => {
  return (
    <div>
      {" "}
      <table className="table text-blue-950">
        <tbody>
          <tr className=" border-b border-gray-200">
            <th>Full Name</th>
            <td>Cy Ganderton</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th>Email</th>
            <td>Hart Hagerty</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th>Phone</th>
            <td>Brice Swyre</td>
          </tr>
          <tr className="border-b border-gray-200">
            <th>Address</th>
            <td>Brice Swyre</td>
          </tr>
        </tbody>
      </table>
      <label
        htmlFor="my_modal_6"
        className="btn  transition-all duration-300  text-white bg-blue-950 hover:bg-transparent hover:text-blue-950 mt-6 px-6 text-[15px]"
      >
        Edit
      </label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-blue-950">
          <div className="w-full">
            <Input placeholder="Full Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <Input placeholder="Address" />
          </div>
          <div className="modal-action">
            <label
              className="btn  transition-all duration-300  text-white bg-blue-950 hover:bg-transparent hover:text-blue-950 mt-6 px-6 text-[15px]"
              htmlFor="my_modal_6"
            >
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
