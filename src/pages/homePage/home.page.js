import React, { useContext } from "react";
import "./home.css";
import MENU from "../../data";
import CategoryCard from "../../components/CategoryCard";
import MenuItemCard from "../../components/MenuItemCard";
import Layout from "../../components/Layout";
import { MyContext } from "../../contextApi/myContext";

const CATEGORY_DATA = [
  {
    icon: "fa fa-database",
    name: "All",
  },
  {
    icon: "fa fa-pied-piper",
    name: "Pizza",
  },
  {
    icon: "fa fa-bars",
    name: "Buger",
  },
  {
    icon: "fa fa-birthday-cake",
    name: "Snack",
  },
  {
    icon: "fa fa-beer",
    name: "Drink",
  },
  {
    icon: "fa fa-coffee",
    name: "Coffee",
  },
];

export default function HomeDashboard() {
  const { state, setState } = useContext(MyContext);
  
  return (
    <Layout>
      <div className="row">
        <div className="col-9" style={{ height: "100vh" }}>
          <div className="container-fluid">
            <div className="row mt-3 mb-5 align-items-center">
              <div className="col-3">
                <h3>Overview</h3>
                <small>Hello {state?.name}, welcome back!</small>
              </div>
              <div className="col-6">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-search pb-2" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-3 mr-auto">
                <span>
                  <i className="fa fa-bell" />
                </span>
                <smal className="px-3">{state?.name}</smal>
                <img
                  src={require("../../logo.png")}
                  style={{ width: 30, height: 30 }}
                />
              </div>
            </div>
            <h2>Menu Category</h2>
            <div className="category-wrapper mb-5">
              {CATEGORY_DATA.map((item, idx) => (
                <CategoryCard key={idx}>
                  <div>
                    <i className={item.icon} />
                  </div>
                  <small>{item.name}</small>
                </CategoryCard>
              ))}
            </div>
            <div className="category-wrapper mb-5">
              {MENU.map((item, idx) => (
                <MenuItemCard
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
