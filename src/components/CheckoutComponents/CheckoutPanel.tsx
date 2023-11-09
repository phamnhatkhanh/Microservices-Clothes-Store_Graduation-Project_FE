
import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom";
import '../../App.css';
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
// import{saveOrder} from"../../utilities/api/apiService"
import {
  cartItemsSelector,
  setCartItem
} from "../../store/slices/cartItemsSlice";





const CheckoutPanel = () => {
  const centeredSectionStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [nameError, setNameError] = useState('');

  const cartItemDetails = useAppSelector(cartItemsSelector);
  const dispatch = useAppDispatch();
  const saveOrder = () => {
    
    const items = cartItemDetails.map((item) => {
      const { id, price, quantity } = item;
      return { id, price, quantity };
    });
    
    const requestBody = {
      email,
      phone,
      name,
      address,
      city,
      items
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    };
    
    fetch('http://localhost:8082/api/orders', requestOptions)
      .then(data => {
        navigate("/success");
        dispatch(setCartItem([]));
      })
      .catch(error => {
        // Handle any errors here
        
      });

  };
  const isAvaliablePhone = (event: any) => {
    const phoneValue = event.target.value;
    setPhone(phoneValue);

    // Regular expression for a valid 11-digit number
    const phoneRegex = /^0[0-9]{9}$/;

    if (!phoneRegex.test(phoneValue)) {
      setPhoneError('Phone must be 10 digits with only numbers.');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  const isAvaliableName = (event: any) => {
    const nameValue = event.target.value;
    setName(nameValue);
    if (name.length < 6) {
      setNameError('Name must be at least 6 characters long.');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const isAvaliableEmail = (event: any) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(emailValue)) {
      setEmailError('Please enter a valid email address.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("sfdhsbf")
    saveOrder();
  };
  const isLoading = false;
  // const isLoading = useAppSelector(loadingSelector);
  return (
    // <section className="flex flex-col justify-center items-center h-screen bg-[#2ecc71] overflow-hidden"></section>
    <>
      <section className="mt-20 pb-5 transition-all duration-500 dark:bg-black dark:text-white d-flex ">
        <div style={centeredSectionStyle}>
          <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
          <div className="container h-100 d-flex justify-content-center">
            <div className="row">
              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body">
                    <ol className="activity-checkout mb-0 px-4 mt-3">
                      <li className="checkout-item">
                        <div className="avatar checkout-icon p-1">
                          <div className="avatar-title rounded-circle bg-primary">
                            <i className="bx bxs-receipt text-white font-size-20"></i>
                          </div>
                        </div>
                        <div className="feed-item-list">
                          <div>
                            <h5 className="font-size-16 mb-1">Billing Info</h5>
                            <p className="text-muted text-truncate mb-4">Sed ut perspiciatis unde omnis iste</p>
                            <div className="mb-3">
                              <form >
                                <div>
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="mb-3">
                                        <label className="form-label" htmlFor="billing-name">Name</label>
                                        <input type="text" className="form-control" id="billing-name" placeholder="Enter name" value={name}
                                          onChange={isAvaliableName} />
                                        {nameError && <div className="text-danger">{nameError}</div>}
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="mb-3">
                                        <label className="form-label" htmlFor="billing-email-address">Email Address</label>
                                        <input type="email" className="form-control" id="billing-email-address" placeholder="Enter email" value={email}
                                          onChange={isAvaliableEmail} />
                                        {emailError && <div className="text-danger">{emailError}</div>}
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="mb-3">
                                        <label className="form-label" htmlFor="billing-phone">Phone</label>
                                        <input type="text" className="form-control" id="billing-phone" placeholder="Enter Phone no." value={phone}
                                          onChange={isAvaliablePhone} />
                                        {phoneError && <div className="text-danger">{phoneError}</div>}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="billing-address">Address</label>
                                    <input type="text" className="form-control" id="billing-address" rows="3" placeholder="Enter full address" value={address}
                                      onChange={(event) => setAddress(event.target.value)}></input>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="mb-4 mb-lg-0">
                                        <label className="form-label" htmlFor="billing-city">City</label>
                                        <input type="text" className="form-control" id="billing-city" placeholder="Enter City" value={city}
                                          onChange={(event) => setCity(event.target.value)} />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-lg-3 col-sm-6">
                                    <div>
                                      <label className="card-radio-label">
                                        <input
                                          name="pay-method"
                                          id="pay-methodoption3"
                                          className="card-radio-input"
                                          type="button"
                                          onClick={handleSubmit}
                                        />
                                        <span className="card-radio py-3 text-center text-truncate">
                                          <i className="bx bx-money d-block h2 mb-3"></i>
                                          <span>Cash on Delivery</span>
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default CheckoutPanel;


