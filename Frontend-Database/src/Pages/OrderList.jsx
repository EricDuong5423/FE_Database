import { useEffect, useState } from "react";
import "../Styles/OrderList.css";
import api from "../api";
import { useAppContext } from "../../hooks/useAppContext";
import { format } from "date-fns";

const OrderList = () => {
  const { ID, deleteCart, deleteToken, deleteRole, deleteID } = useAppContext();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await api.get(`/order/get-order-by-id?e_id=${ID}`);
      setOrders(response.data);
    };
    fetchOrders();
  }, []);
  return (
    <div className="order-list-container">
      <h2>Order List</h2>
      <p>Let's take a look at today's order list</p>
      <button
        onClick={() => {
          deleteCart();
          deleteID();
          deleteToken();
          deleteID();
        }}
      >
        {" "}
        LOG OUT
      </button>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Time created</th>
            <th>Time completed</th>
            <th>Shipper ID</th>
            <th>Customer ID</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders ? (
            orders.map((order, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{order.id}</td>
                <td>{format(new Date(order.createAt), "HH:mm")}</td>
                <td>{format(new Date(order.completeAt), "HH:mm")}</td>
                <td>{order.shipper_id}</td>
                <td>{order.customer_id}</td>
                <td>{order.price.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <p>Waiting for fetching</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
