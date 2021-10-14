import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import "./style.scss";
import { singleProduct, deleteProduct } from "../../redux/product/actions";

const Homepage = ({ products, singleProduct, deleteProduct }) => {
  const history = useHistory();
  const [prod, setProd] = useState(products);

  useEffect(() => {
    setProd(products);
  }, [products]);

  const handleEdit = (singleData) => {
    singleProduct({ data: singleData, route: "edit" });
    history.push("/add");
  };

  const handleAdd = (item) => {
    singleProduct({ data: {}, route: "add" });
    history.push("/add");
  };

  const handleDel = (item) => {
    // [...state.products, action.payload].filter((product) => product.name !== action.payload.name)
    const dummy = products.filter((product) => product.id !== item.id);
    console.log(dummy);
    console.log("products", products);
    deleteProduct(dummy);
  };

  const handleSort = (type) => {
    switch (type) {
      case "name":
        const sortName = prod.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );
        setProd([...sortName]);
        break;
      case "launchedAt":
        const sortDate = prod.sort((a, b) =>
          new Date(a.launchedAt) > new Date(b.launchedAt) ? 1 : -1
        );
        setProd([...sortDate]);
        break;
      case "launchSite":
        const sortWebsite = prod.sort((a, b) =>
          a.launchSite.toLowerCase() > b.launchSite.toLowerCase() ? 1 : -1
        );
        setProd([...sortWebsite]);
        break;
      case "popularity":
        const sortStars = prod.sort((a, b) =>
          parseInt(a.popularity) > parseInt(b.popularity) ? 1 : -1
        );
        console.log(sortStars);
        setProd([...sortStars]);
        break;
      default:
        console.log("default");
    }
  };

  return (
    <div className="homepage">
      <div className="head">
        <h1>Homepage</h1>
        <button onClick={() => handleAdd()}>Add Product</button>
      </div>

      <div className="sorting-container">
        <button className="label">Sort By:</button>
        <button onClick={() => handleSort("name")}>Name</button>
        <button onClick={() => handleSort("launchedAt")}>Launched At</button>
        <button onClick={() => handleSort("launchSite")}>Launch Site</button>
        <button onClick={() => handleSort("popularity")}>Popularity</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Launched At</th>
            <th>Launch Site</th>
            <th>Popularity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {prod.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.launchedAt}</td>
              <td>{item.launchSite}</td>
              <td>{item.popularity}</td>
              <td className="btn" onClick={() => handleEdit(item)}>
                ✏️ Edit
              </td>
              <td className="btn" onClick={() => handleDel(item)}>
                🗑️ Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.products,
});

export default connect(mapStateToProps, { singleProduct, deleteProduct })(
  Homepage
);
