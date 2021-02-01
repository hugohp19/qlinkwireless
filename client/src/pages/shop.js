import React, { useState, useEffect } from 'react';
import '../style/pages/shop/shop.scss';
import WelcomeImage from '../assets/images/Image29.png';
import axios from 'axios';
import DeviceCard from '../components/deviceCard';

const Shop = () => {
  const [ devices, setDevices ] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try{
        let devicesInfo = await axios.get(`/products`);
        setDevices(devicesInfo.data);
      } catch(err){
        console.log(err)
      }
    }
    getData();
  }, []);

  return (
    <div className='shopPage_divs-container'>
      <div className='shopPage_welcome-container'>
        <h3>WELCOME!</h3>
        <div className='shopPage_welcome-div'>
          <div className='shopPage_welcome-image'>
            <img src={WelcomeImage} alt='Welcome'/>
          </div>
          <div className='shopPage_welcome-text'>
            <p>Welcome to Q Link Wireless... Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, ligula sed magna aliquet quam accumsan id imperdiet et, porttitor at sem.</p>
          </div>
        </div>
      </div>
      <div className='shopPage-deviceCard-container'>
        { devices && devices.map((device, index) => {
            return (
              <DeviceCard key={index} device={device} index={index}/>
            );
          })
        }
      </div>
    </div>
  )
}

export default Shop;
