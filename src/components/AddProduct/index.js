import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { addProduct, editProduct } from "../../redux/product/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const AddProduct = ({ addProduct, products, singleProduct, formRoute }) => {
  const numStars = 5;
  const history = useHistory();
  const [rank, setRank] = useState(0);
  const [data, setData] = useState({
    name: "",
    launchedAt: "",
    launchSite: "",
    popularity: rank,
  });

  useEffect(() => {
    setData({
      name: singleProduct.name,
      launchedAt: singleProduct.launchedAt,
      launchSite: singleProduct.launchSite,
      popularity: singleProduct.popularity,
    });
    setRank(singleProduct.popularity);
  }, [singleProduct]);

  const notify = (text) => toast.error(text, "error", { autoClose: 2000 });
  const handleSubmit = (e) => {
    e && e.preventDefault();
    let newProducts = [...products, { ...data, popularity: rank }];
    if (data.name === "") {
      notify("Product Name is empty.");
    } else if (data.launchedAt === "") {
      notify("Launched At is empty.");
    } else if (data.launchSite === "") {
      notify("Launched At is empty.");
    } else if (rank === 0) {
      notify("Popularity is 0.");
    } else {
      if (formRoute === "add") {
        addProduct(newProducts);
      } else {
        
        const dummy = products;
        let objIndex = dummy.findIndex((obj) => obj.name === singleProduct.name);
        dummy[objIndex] = data;
        editProduct(dummy);
      }
      history.push("/");
    }
  };

  return (
    <div className="add-product">
      <ToastContainer />
      <h1>{singleProduct !== {} ? "Edit" : "Add"} Product</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-container">
          <div className="formRow">
            <input
              type="text"
              placeholder="Product Name*"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="formRow">
            <input
              type="date"
              placeholder="Product Launched At*"
              value={data.launchedAt}
              onChange={(e) => setData({ ...data, launchedAt: e.target.value })}
            />
          </div>
          <div className="formRow">
            <input
              type="text"
              placeholder="Launch Site*"
              value={data.launchSite}
              onChange={(e) => setData({ ...data, launchSite: e.target.value })}
            />
          </div>
          <div className="formRow">
            <label>Popularity</label>
            <div className="star-container">
              {[...Array(numStars)].map((e, i) => (
                <div
                  className={
                    rank >= i + 1 ? "single-star selected" : "single-star"
                  }
                  key={i}
                  onClick={() => {
                    setRank(i + 1);
                  }}
                >
                  {Star}
                </div>
              ))}
            </div>
          </div>
          <div className="formRow">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.products,
  singleProduct: products.singleProduct.data,
  routeCheck: products.singleProduct.formRoute,
});
export default connect(mapStateToProps, { addProduct, editProduct })(
  AddProduct
);

export const Star = (
  <svg
    height="28.6px"
    viewBox="0 -10 511.98685 511"
    width="28.6px"
    fill="#ffc107"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0" />
  </svg>
);
