import React, { useRef } from 'react';
type AlireviewAppProps = {
  id: number;

};
const AlireviewApp = ({id}:AlireviewAppProps) => {

  const iframeSrc = `https://widget.alireviews.io/widget/review-widget?shop_id=60157821137&widget_id=87522&type_page=product&product_id=${id}&isAdminLogin=true&star=all&customer_id=&product_in_cart=&num_rand=0&total_order_values=0&avg_order_value=0&tag=&country=&last_purchase=&t=1699285246&locale=en`;
  return (
    <div data-section-id="87522" data-section-type="widget-box" style={{ paddingTop: 0, paddingBottom: 0 ,overflow:'hidden'}}>
    <div id="shopify-ali-review-widget" product-id={7278544552145}>
      <div className="shop_info" shop-id={60157821137} shop-name="khanhpham530112313.myshopify.com" style={{ display: 'none' }}>
        <div className="reviews"></div>
      </div>

      <iframe
    
        className="aliReviewsFrame"
        widget-id={87522}
        title="AliReviews"
        data-ar-src={iframeSrc}
        width="100%"
        allowFullScreen
        src={iframeSrc}
        style={{ height:"100vh",overflowY:'hidden'}}
      ></iframe>
    </div>
  </div>
  );
};

export default AlireviewApp;
