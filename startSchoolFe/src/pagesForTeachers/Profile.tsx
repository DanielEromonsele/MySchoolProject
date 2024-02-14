import { InnerProfile } from "./InnerProfile";
import Table from "./Table";

const Profile = () => {
  document.title = "Profile";

  return (
    <div>
      <div className="w-full grid grid-cols-10 gap-4">
        <div className="border md:col-span-4 col-span-10 min-h-40">
          <InnerProfile />
        </div>
        <div className="border md:col-span-6 col-span-10 min-h-40 w-full flex items-center">
          <div className="overflow-x-auto w-full p-10">
            <Table />
          </div>
        </div>
        <div className="border md:col-span-4 col-span-10 min-h-40">
          {/* <InnerProfile /> */}
        </div>
        <div className="border md:col-span-6 col-span-10 min-h-40 w-full flex items-center">
          <div className="overflow-x-auto w-full p-10">{/* <Table /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
