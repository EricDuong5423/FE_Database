import Sidebar from "../Components/AdminSlide";
import Header from "../Components/AdminHeader";
import StaffTable from "../Components/AdminTable";
import "../Styles/Admin.css";

const Admin = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <StaffTable />
      </div>
    </div>
  );
};

export default Admin;
