import React from 'react';
import './home.css';
import customerlogo from './images/customer.png'
import orderlogo from './images/orders.png'
import campaignlogo from './images/campaign.png'
import audiencelogo from './images/audience.png'
import { Link } from 'react-router-dom';

const Home = () => {

 

  return (
      <div className="box-container">
        <div className="box">
          <h3>Customer Registration</h3>
          <img
            src={customerlogo}
            alt=""
            width="200"
            height="150"
          />
          <p  className='mt-6 mb-4'>Register as Customer</p>
          <Link to={'/customer'}>
          <button id='homebtn' className="Clickbutton" type="button" >
            Get Started
          </button>
          </Link>
        </div>
        <div className="box">
          <h3>Orders</h3>
          <img
            src={orderlogo}
            alt=""
            width="200"
            height="150"
          />
          <p className='mt-6 mb-4'>Place Order</p>
          <Link to={'/order'}>

          <button id='homebtn' className="Clickbutton" type="button" >
            Get Started
          </button>
          </Link>
        </div>
        <div className="box">
          <h3>Audience</h3>
          <img
            src={campaignlogo}
            alt=""
            width="200"
            height="150"
          />
          <p className=' mt-6 mb-4'>Create Audience</p>
          <Link to={'/audience'}>

          <button id='homebtn' className="Clickbutton" type="button" >
            Get Started
          </button>
          </Link>
        </div>
        <div className="box">
          <h3>Campaign</h3>
          <img
            src={audiencelogo}
            alt=""
            width="200"
            height="150"
          />
          <p className='mt-6 mb-4'>List of Campaigns</p>
          <Link to={'/campaign'}>

          <button id='homebtn' className="Clickbutton" type="button" >
            Get Started
          </button>
          </Link>
        </div>
      </div>
   
  );
};

export default Home;
