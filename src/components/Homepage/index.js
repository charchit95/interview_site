import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import "./style.scss";

const Homepage = ({ products }) => {
  const history = useHistory();
  const [prod, setProd] = useState(products);
  useEffect(() => {
    setProd(products);
  }, [products]);
  return (
    <div className="homepage">
      <div className="head">
        <h1>Homepage</h1>
        <button onClick={() => history.push("/add")}>Add Product</button>
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
            <>
              <tr>
                <td>{item.name}</td>
                <td>{item.launchedAt}</td>
                <td>{item.launchSite}</td>
                <td>{item.popularity}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.products,
});

export default connect(mapStateToProps, null)(Homepage);
