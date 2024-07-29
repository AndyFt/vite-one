import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="row">
      <div className="col-3  border-end">
        <div
          className="d-flex flex-column flex-shrink-0 p-3  main"
          style={{ width: "100%" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img
              src={require("../logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <span className="fs-4">Food</span>
          </a>
          {/* <hr /> */}
          <ul className="nav nav-pills flex-column mb-5 mt-5">
            <li className="nav-item">
              <a href="/" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" aria-current="page">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" aria-current="page">
                Favourites
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" aria-current="page">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" aria-current="page">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a href="/signin" className="nav-link" aria-current="page">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a href="/signup" className="nav-link" aria-current="page">
                Sign Up
              </a>
            </li>
          </ul>
          {/* <hr /> */}
          <div>
            <button className="btn btn-warning">Order now</button>
          </div>
        </div>
      </div>
      <div className='col-9' style={{ height: "100vh" }}>
        {children}
      </div>
    </div>
  );
}
