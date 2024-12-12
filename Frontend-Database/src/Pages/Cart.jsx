import api from "../api";
import SlideMenuCustomer from "../Components/SlideMenuCustomer";
import "../Styles/Cart.css";

function Cart() {
  return (
    <>
      <SlideMenuCustomer slideNavigate="Cart"></SlideMenuCustomer>
      <TitleText />
      <CustomerInfo />
    </>
  );
}

function TitleText() {
  return (
    <div className="title-text">
      <h1>Cart</h1>
      <h2>Confirm your order</h2>
    </div>
  );
}

function CustomerInfo() {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year
    return `${day}/${month}/${year}`;
  };

  const formattedDate = formatDate(Date.now());
  return (
    <div className="customer">
      <div className="order-info">
        <h3>Order info</h3>
        <p style={{ fontWeight: "400" }}>Time: {formattedDate}</p>
      </div>
      <div className="customer-info">
        <h3>Customer</h3>
        <p>Name : %Đỗ Phú Quí%</p>
        <p>Phone: %(+84)966866203%</p>
      </div>
      <div className="address-info">
        <h3>Address</h3>
        <p>%268 đường Lý Thường Kiệt, Phường 14 Quận 10%</p>
      </div>
    </div>
  );
}

export default Cart;
