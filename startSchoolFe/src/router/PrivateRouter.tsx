import { FC, PropsWithChildren, useEffect, useState } from "react";
import {
  getSchoolCookie,
  openServerAPI,
  readSchool,
} from "../pages/api/schoolAPIs";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const stateToken = useSelector((state: any) => state.user);
  const [state, setState] = useState<any>({});
  useEffect(() => {
    openServerAPI();
    getSchoolCookie().then((res: any) => {
      return readSchool(res.data).then((resp) => {
        return setState(resp.data);
      });
    });
  }, []);

  return (
    <div>
      {stateToken ? <div>{children}</div> : <Navigate to="/auth/login" />}
    </div>
  );
};

export default PrivateRouter;
