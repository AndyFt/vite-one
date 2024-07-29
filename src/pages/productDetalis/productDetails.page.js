import React from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import MENU from "../../data";
import './productDetails.css';

// const MY_PRODUCT = {
//   id: "94301",
//   name: "Chicken Livers and Portuguese Roll",
//   price: "USD 12",
//   description:
//     "Chicken Livers Topped with PERi-PERi Sauce, Served with A Roll To Soak Up The Sauce",
//   image: require("../../burguer.jpg"),
// };



export default function ProductDetails() {

  const { id } = useParams();
  const product = MENU.find((item) => item.id === id);

  if (!product) {
    return
    <div>
      <h3>Product not found!</h3>
    </div>
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-9" style={{ height: "100vh" }}>
          <div className="container-fluid mt-5">
            <h2>Product Details</h2>
            <div className="row">
              <div className="col-6 mt-5 mb-5">
                <img
                  src={product.image}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-5 mt-5 mr-4">
                <h2>{product.name}</h2>
                <div>
                  <p>{product.price}</p>
                  <hr />
                  <p>
                    <span style={{ fontWeight: "bold" }}>Description</span>:{" "}
                    <br />
                    <small>{product.description}</small>
                  </p>
                </div>
                <Link to={`/checkout/${id}`}>
                  <button className="btn btn-warning rounded px-5">
                    Proceed to checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
