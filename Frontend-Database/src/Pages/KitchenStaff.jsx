import { useEffect, useState } from "react";
import "../Styles/KitchenStaff.css";
import { useAppContext } from "../../hooks/useAppContext";
import api from "../api";
import { format } from "date-fns";

const KitchenStaff = () => {
  const { deleteCart, deleteToken, deleteRole } = useAppContext();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    remaining: 0,
    mfg_date: "",
    exp_date: "",
    price: 0,
  });
  const [editQuantity, setEditQuantity] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/product/get-all-product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    if (
      newProduct.name &&
      newProduct.remaining * 1 > 0 &&
      newProduct.mfg_date &&
      newProduct.exp_date &&
      newProduct.price * 1 > 0
    ) {
      const productData = {
        name: newProduct.name,
        price: newProduct.price * 1,
        mfg_date: newProduct.mfg_date,
        exp_date: newProduct.exp_date,
        remaining: newProduct.remaining * 1,
      };

      try {
        const response = await api.post("/product/add-product", productData);
        setProducts([...products, response.data]);
        setNewProduct({
          name: "",
          remaining: 0,
          mfg_date: "",
          exp_date: "",
          price: 0,
        });
        location.reload();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await api.delete(`/product/delete-product?id=${id}`);

      // Cập nhật lại danh sách sản phẩm sau khi xóa thành công
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="kitchen-staff">
      <h1 className="kitchen-staff__title">Warehouse Management</h1>
      <button
        className="kitchen-staff__logout"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          deleteCart();
          deleteRole();
          deleteToken();
        }}
      >
        Logout
      </button>
      <div className="kitchen-staff__add-product">
        <h2 className="kitchen-staff__section-title">Add New Product</h2>
        <input
          className="kitchen-staff__input"
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          className="kitchen-staff__input"
          type="text"
          placeholder="Remaining"
          value={`${newProduct.remaining}`}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              remaining: e.target.value * 1,
            })
          }
        />
        <input
          className="kitchen-staff__input"
          type="date"
          placeholder="Manufacture Date"
          value={newProduct.mfg_date}
          onChange={(e) =>
            setNewProduct({ ...newProduct, mfg_date: e.target.value })
          }
        />
        <input
          className="kitchen-staff__input"
          type="date"
          placeholder="Expiry Date"
          value={newProduct.exp_date}
          onChange={(e) =>
            setNewProduct({ ...newProduct, exp_date: e.target.value })
          }
        />
        <input
          className="kitchen-staff__input"
          type="text"
          placeholder="Price"
          value={`${newProduct.price}`}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value * 1 })
          }
        />
        <button
          className="kitchen-staff__add-button"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>

      <div className="kitchen-staff__product-list">
        <h2 className="kitchen-staff__section-title">Products in Warehouse</h2>
        {products.length > 0 ? (
          <table className="kitchen-staff__table">
            <thead>
              <tr>
                <th className="kitchen-staff__table-header">Name</th>
                <th className="kitchen-staff__table-header">Price</th>
                <th className="kitchen-staff__table-header">Remaining</th>
                <th className="kitchen-staff__table-header">Discard number</th>
                <th className="kitchen-staff__table-header">
                  Manufacture Date
                </th>
                <th className="kitchen-staff__table-header">Expiry Date</th>
                <th className="kitchen-staff__table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="kitchen-staff__table-row">
                  <td className="kitchen-staff__table-cell">{product.name}</td>
                  <td className="kitchen-staff__table-cell">
                    {product.price / 1000}k <strong>VND</strong> / trên 1 sản
                    phẩm
                  </td>
                  <td className="kitchen-staff__table-cell">
                    {product.remaining}
                  </td>
                  <td className="kitchen-staff__table-cell">
                    {product.discarded_No}
                  </td>
                  <td className="kitchen-staff__table-cell">
                    {format(new Date(product.mfg_date), "dd/MM/yyyy")}
                  </td>
                  <td className="kitchen-staff__table-cell">
                    {format(new Date(product.exp_date), "dd/MM/yyyy")}
                  </td>
                  <td className="kitchen-staff__table-cell">
                    <button
                      className="kitchen-staff__delete-button"
                      onClick={() => {
                        handleDeleteProduct(product.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="kitchen-staff__import-button"
                      onClick={() => {}}
                    >
                      Import
                    </button>
                    <button
                      className="kitchen-staff__discard-button"
                      onClick={() => {}}
                    >
                      Discard
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="kitchen-staff__no-products">
            No products in the warehouse.
          </p>
        )}
      </div>
    </div>
  );
};

export default KitchenStaff;
