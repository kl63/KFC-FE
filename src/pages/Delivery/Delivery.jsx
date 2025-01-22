import React from 'react';
import './Delivery.css';

const Delivery = () => {
  return (
    <>
      <section className="delivery-section">
        <div className="delivery-container">
          <h1 className="delivery-title">Delivery Information</h1>
          <p className="delivery-description">
            At Kevin's Fried Creations, we strive to deliver your favorite dishes to your doorstep quickly and efficiently. 
            Here's everything you need to know about our delivery services.
          </p>
          <h2 className="delivery-subtitle">Delivery Areas</h2>
          <p className="delivery-description">
            We currently deliver to select locations within the city and surrounding suburbs. Enter your zip code during checkout 
            to confirm availability in your area.
          </p>
          <h2 className="delivery-subtitle">Delivery Times</h2>
          <p className="delivery-description">
            Our delivery services are available daily from 11:00 AM to 10:00 PM. Orders placed outside of these hours will be 
            processed the next day.
          </p>
          <h2 className="delivery-subtitle">Delivery Charges</h2>
          <p className="delivery-description">
            A standard delivery fee of $5.00 applies to all orders.
          </p>
          <h2 className="delivery-subtitle">Order Tracking</h2>
          <p className="delivery-description">
            Track your order in real time through your account dashboard. You'll receive live updates on the status of your delivery 
            and an estimated time of arrival.
          </p>
          <h2 className="delivery-subtitle">Contactless Delivery</h2>
          <p className="delivery-description">
            For your safety and convenience, we offer contactless delivery. Just choose the option during checkout, and our 
            delivery personnel will leave your order at the specified location.
          </p>
          <h2 className="delivery-subtitle">Customer Support</h2>
          <p className="delivery-description">
            Need help with your delivery? Contact us at <a href="mailto:support@kevinsfriedcreations.com">support@kevinsfriedcreations.com</a> 
            or call us at (223) 456-7890. Our support team is available 24/7 to assist you.
          </p>
        </div>
      </section>
    </>
  );
};

export default Delivery;
