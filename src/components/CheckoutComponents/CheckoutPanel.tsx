

import '../../App.css';




const CheckoutPanel = () => {
  const centeredSectionStyle = {
    display: 'flex',
    justifyContent: 'center'
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
                              <form>
                                <div>
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="mb-3">
                                        <label className="form-label" htmlFor="billing-name">Name</label>
                                        <input type="text" className="form-control" id="billing-name" placeholder="Enter name" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="mb-3">
                                        <label className="form-label" htmlFor="billing-email-address">Email Address</label>
                                        <input type="email" className="form-control" id="billing-email-address" placeholder="Enter email" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="mb-3">
                                        <label className="form-label" htmlFor="billing-phone">Phone</label>
                                        <input type="text" className="form-control" id="billing-phone" placeholder="Enter Phone no." />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label" htmlFor="billing-address">Address</label>
                                    <textarea className="form-control" id="billing-address" rows="3" placeholder="Enter full address"></textarea>
                                  </div>
                                  <div className="row">

                                    <div className="col-lg-4">
                                      <div className="mb-4 mb-lg-0">
                                        <label className="form-label" htmlFor="billing-city">City</label>
                                        <input type="text" className="form-control" id="billing-city" placeholder="Enter City" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">

                                  <div className="col-lg-3 col-sm-6">
                                    <div>
                                      <label className="card-radio-label">
                                        <input type="radio" name="pay-method" id="pay-methodoption3" className="card-radio-input" checked />
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


