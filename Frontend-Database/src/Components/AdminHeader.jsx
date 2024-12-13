import { useEffect, useState } from "react";
import "../Styles/Admin.css";
import api from "../api";
import { useAppContext } from "../../hooks/useAppContext";

const Header = () => {
  const [adminData, setAdminData] = useState(null);
  const { ID } = useAppContext();
  useEffect(() => {
    const fetchAdminData = async () => {
      const response = await api.get(`/user/staff/admin?store_id=${ID}`);
      console.log(response.data);
      setAdminData(response.data);
    };
    fetchAdminData();
  }, []);
  return (
    <div className="header">
      <h1>Admin ID: {adminData ? adminData[0].e_id : "wait for fetching"}</h1>
      <p>Staff List</p>
    </div>
  );
};

export default Header;
