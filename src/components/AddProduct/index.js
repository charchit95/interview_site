import React, { useState } from "react";

import { addProduct } from "../../redux/product/actions";

const AddProduct = () => {
  const [data, setData] = useState({
    name: "",
    launchedAt: "",
    launchSite: "",
    popularity: "",
  });

  const handleSubmit = (e) => {
    e && e.preventDefault();
    addProduct((item) => [...item, data]);
  };
  return (
    <>
      <h1>Add</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>launchedAt</label>
          <input
            type="date"
            value={data.launchedAt}
            onChange={(e) => setData({ ...data, launchedAt: e.target.value })}
          />
        </div>
        <div>
          <label>launchSite</label>
          <input
            type="text"
            value={data.launchSite}
            onChange={(e) => setData({ ...data, launchSite: e.target.value })}
          />
        </div>
        <div>
          <label>popularity</label>
          <input
            type="text"
            value={data.popularity}
            onChange={(e) => setData({ ...data, popularity: e.target.value })}
          />
        </div>
        <div>
          <input type="submit" value={"Submit"} />
        </div>
      </form>
    </>
  );
};



export default AddProduct;
