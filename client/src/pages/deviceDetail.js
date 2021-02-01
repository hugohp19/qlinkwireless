import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
//import axios from 'axios';
import '../style/pages/deviceDetail/deviceDetail.scss';
import boxImage from '../assets/images/box.png';
import simCardImage from '../assets/images/simcard.png';
import smartPay from '../assets/images/smartpay_logo.png';

const DeviceDetail = (props) => {
  const [ payment, setPayment ] = useState(false);
  // const [ deviceDetail, setDeviceDetail ] = useState(false);
  const [ deviceColor, setDeviceColor ] = useState('BLACK');

  const deviceInfo = props.location.state.device;
  const deviceImage =  props.location.state.deviceImage;
  const deviceBrand =  props.location.state.deviceBrand;
  
  useEffect(() => {
    window.scrollTo(0, 0);   
  }, [])
  // ALL INFORMATION WAS PRESENT IN THE FIRST FETCH
  // USE THIS IN CASE OF MORE INFO NEEDED:
  
  // let { id } = useParams(); //to use with useEffect and Axios
  // useEffect(() => {
  //   const getDeviceDetail = async () =>{
  //     try {
  //       const deviceDetailResponse = await axios.get(`/product/${id}`);
  //       setDeviceDetail(deviceDetailResponse.data[0]);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getDeviceDetail()
  // }, [])

  const handlePaymentMonthly = () =>{
    setPayment(true);
  }

  const handlePaymentFull = () =>{
    setPayment(false);
  }

  const handleColor = color => () =>{
    setDeviceColor(color);
  }

  const Specification = () =>{
    if(deviceInfo.Details){
      return(parse(`<table><tbody>${deviceInfo.Details}</tbody></table>`, { trim: true }))
    } else{
      return('Coming Soon!');
    }
  }

  return (
    <>
      <div className='deviceDetail-container'>
        <div className='deviceDetail-imgContainer'>
          <img className='largePic'src={deviceImage} alt='Device'/>
          <div>
            <img className='thumb' src={deviceImage} alt='Device'/>
          </div>
        </div>
        <div className='deviceDetail-right-container'>
          <div className='deviceDetail-top'>
            <p>{deviceBrand}</p>
            <h3>{deviceInfo.Name}</h3>
          </div>
          <p>{deviceInfo.Summary ? deviceInfo.Summary : 'Coming Soon!'}</p>
          <div className='deviceDetail-shipping'>
            <div>
              <img src={boxImage} alt='Shipping Box'/>
              <p>Free shipping</p>
            </div>
            <div>
              <img src={simCardImage} alt='Shipping Box'/>
              <p>Free SIM card included</p>
            </div>
          </div>
          <div className='deviceDetail-bottom'>
            <h3>COLOR: {deviceColor}</h3>
            <div className='deviceDetail_bottom-btns'>
              <button onClick={handleColor('BLACK')}><span>00</span></button>
              <button onClick={handleColor('GOLD')}><span>00</span></button>
              <button onClick={handleColor('WHITE')}><span>00</span></button>
            </div>
            <div className='deviceDetail-storage_payment'>
              <h3>STORAGE</h3>
              <div className='deviceDetail-storage'>
                <button className='btnStyle-CustomWidth btnStyle-white'>64GB</button>
                <button className='btnStyle-CustomWidth btnStyle-white'>125GB</button>
                <button className='btnStyle-CustomWidth btnStyle-white'>256GB</button>
              </div>
            </div>
            <div className='deviceDetail-storage_payment'>
              <h3>PAYMENT</h3>
              <div className='deviceDetail-payment'>
                <button className='btnStyle-CustomWidth btnStyle-gray' onClick={handlePaymentMonthly}>Pay Monthly</button>
                <button className='btnStyle-CustomWidth btnStyle-gray' onClick={handlePaymentFull}>Pay in Full</button>
              </div>
            </div>
            <div className='deviceDetail_bottom-payments'>
              <h3>{ payment ? 'FINANCE FROM' : 'ONE PAYMENT'}</h3>
              <div>
                { payment ? <h3>${(deviceInfo.Price / 24).toFixed(2)}/ <span> mo.</span></h3> : <h3>${deviceInfo.Price}</h3>}
                <img src={smartPay} alt='SmartPay Logo'/>
              </div>
            </div>
            <div className='btnDiv'>
              <button className='btnStyle btnStyle-dark' >Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className='deviceDetail-features container'>
        <h3>ADDITIONAL FEATURES</h3>
        <ul>
          <li>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</li>
          <li>Pellentesque in ipsum id orci porta dapibus.</li>
          <li>Cras ultricies ligula sed magna dictum porta.</li>
          <li>Cras ultricies ligula sed magna dictum porta.</li>
        </ul>
      </div>
      <div className='deviceDetail-specifications container'>
        <h3>SPECIFICATIONS</h3>
        <div>
          <Specification />
        </div>
      </div>
    </>
  )
}

export default DeviceDetail;
