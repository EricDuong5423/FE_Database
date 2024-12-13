import { useAppContext } from "../../hooks/useAppContext";
import api from "../api";
import SlideMenuCustomer from "../Components/SlideMenuCustomer";
import "../Styles/Cart.css";

function Cart() {
  const { cart, setCart } = useAppContext();

  const handleChangeQuantity = (e, item) => {
    const findCartItem = cart.find((cartItem) => cartItem.id === item.id);
    findCartItem.quantity = parseInt(e.target.value);
    findCartItem.totalPrice = findCartItem.quantity * findCartItem.price;
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart([...cart]);
  };

  const handleCancelProduct = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart([...newCart]);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const component = cart.map((item) => {
      return {
        dish_id: item.id,
        quantity: item.quantity,
      };
    });

    console.log(component);

    const customerID = 2;
    const storeID = 10;

    const response = await api.post(
      `/order/order?customer_id=${customerID}&store_id=${storeID}`,
      {
        component: component,
      }
    );

    console.log(response);

    setCart([]);
    localStorage.setItem("cart", []);
  };

  return (
    <>
      <SlideMenuCustomer slideNavigate="Cart"></SlideMenuCustomer>
      <TitleText />
      {/* <CustomerInfo /> */}

      <div className="cart-container">
        {cart && cart.length === 0 && (
          <div className="cart-wrapper">
            <div className="cart-empty-announce">Cart is Empty</div>
          </div>
        )}

        {cart && cart.length > 0 && (
          <form onSubmit={handlePlaceOrder} className="cart-wrapper">
            <div className="cart-menu-list">
              {cart &&
                cart.map((item) => (
                  <div key={item.id} className="cart-menu-item">
                    <div className="cart-item-no">{item.id}</div>
                    <div className="cart-item-detail">
                      <div className="cart-item-desc">
                        <h3>{item.name}</h3>
                      </div>
                      <div className="cart-item-quantity">
                        <h3>Quantity</h3>
                        <input
                          type="number"
                          name="quantity"
                          id=""
                          min={1}
                          defaultValue={item.quantity}
                          onChange={(e) => handleChangeQuantity(e, item)}
                        />
                      </div>
                      <div className="cart-item-price">
                        <h3>Price</h3>
                        <div>{item.totalPrice?.toLocaleString() || 0} VND</div>
                      </div>
                    </div>
                    <div
                      className="cart-item-cancel"
                      onClick={() => handleCancelProduct(item)}
                    >
                      -
                    </div>
                  </div>
                ))}
            </div>

            {
              <button className="cart-place-order" type="submit">
                Confirm
              </button>
            }
          </form>
        )}
      </div>
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
