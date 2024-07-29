import React from "react";

function CategoryCard({ onClick, children }) {
  return (
    <div
      onClick={onClick}
      className="d-flex flex-column justify-content-center align-items-center border rounded px-4 py-1 mx-2"
    >
      {children}
    </div>
  );
}

export default CategoryCard;
