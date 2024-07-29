import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MENU from '../../data';
import './checkoutpage.css';
import FormInput from '../../components/FormInput';

const ParentComponent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default function CheckoutPage() {

  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const product = MENU.find((item) => item.id === id);

  if (!product) {
    return
    <div>
      <h3>Product not found!</h3>
    </div>
  }


  const handleAddClick = () => {
    setAmount(amount + 1);
  };

  const handleSubtractClick = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className='main-container col-10'>
      <ParentComponent>
        <div>
          <h1>Your Product</h1>
          <hr />
        </div>
        <div className='row'>
          <div className="col-6 internal" style={{ height: "100vh" }}>
            <div className="container-fluid mt-5">
              <div className="row first-column">
                <div className="internal col-6 mt-5 mb-5">
                  <img
                    src={product.image}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="internal col-5 mt-5 mr-4">
                  <h4>{product.name}</h4>
                  <div>
                    <p>
                      <small>{product.description}</small>
                    </p>
                    <p style={{ fontWeight: "bold" }}>{product.price}</p>
                  </div>
                  <div className='amount'>
                    Qtd: {amount}
                  </div>

                  <div className='buttons'>
                    <div>
                      <button className='btn btn-warning rounded px-5' onClick={handleAddClick}>
                        +
                      </button>
                    </div>
                    <div>
                      <button className='btn btn-warning rounded px-5' onClick={handleSubtractClick}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 internal" style={{ height: "100vh" }}>
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="second-column col-5 mt-5 mr-4 rounded">
                  <h3>Shipping Address</h3>
                  <form class="row g-3">
                    <div class="col-md-6">
                      <FormInput name="name" label="First Name" />
                    </div>
                    <div class="col-md-6">
                      <FormInput name="name" label="Last Name" />
                    </div>
                    <FormInput name="address" label="Street Address" />
                    <div class="col-md-6">
                      <FormInput name="city" label="City" />
                    </div>
                    <div class="col-md-6">
                      <FormInput name="number" label="Phone Number" />
                    </div>
                    <div class="col-md-6">
                      <Link to={'/'}>
                        <button className="btn btn-warning rounded px-5">
                          Complete order
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParentComponent>
    </div>
  );
};

