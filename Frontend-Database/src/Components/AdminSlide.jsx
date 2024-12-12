import { useAppContext } from "../../hooks/useAppContext";
import "../Styles/Admin.css";

const Sidebar = () => {
  const { deleteCart, deleteToken, deleteRole } = useAppContext();
  return (
    <div className="sidebar">
      <h2>Pizzaa. 🍕</h2>
      <p>In crust - we trust</p>
      <ul>
        <li>
          <button>Staff List</button>
        </li>
        <li>
          <button
            onClick={() => {
              deleteCart();
              deleteRole();
              deleteToken();
              localStorage.removeItem("token");
              localStorage.removeItem("role");
            }}
          >
            Exit
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
