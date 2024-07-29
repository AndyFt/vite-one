import React from "react";
import { Link } from "react-router-dom";

function MenuItemCard({ image, name, price, id }) {
  return (
    <div
      style={{ width: 200, height: 200, marginBottom: 20 }}
      className="d-flex flex-column justify-content-center
       align-items-center border rounded px-4 py-1 mx-2"
    >
      <Link to={`/product/${id}`}>
        <img src={image} style={{ width: 90, height: 90 }} />
        <h6>{name}</h6>
        <p>{price}</p>
      </Link>
    </div>
  );
}

export default MenuItemCard;
