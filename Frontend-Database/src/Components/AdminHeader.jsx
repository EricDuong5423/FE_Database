import { useEffect, useState } from "react";
import "../Styles/Admin.css";
import api from "../api";
const store_id = "FA0DD174-73D7-404D-9AD9-C738934240FA";

const Header = () => {
  const [adminData, setAdminData] = useState(null);
  useEffect(() => {
    const fetchAdminData = async () => {
      const response = await api.get(`/user/staff/admin?store_id=${store_id}`);
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
