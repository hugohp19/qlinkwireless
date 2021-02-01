import React from 'react';
import '../style/pages/deviceDetail/deviceDetail.scss';
import galaxy from '../assets/images/galaxy_a6.png';
import boxImage from '../assets/images/box.png';
import simCardImage from '../assets/images/simcard.png';

const deviceDetail = () => {
  return (
    <div className='deviceDetail-container'>
      <div className='deviceDetail-imgContainer'>
        <img src={galaxy} alt='Device'/>
      </div>
      <div className='deviceDetail-left-container'>
        <div className='deviceDetail-top'>
          <p>Apple</p>
          <h3>Iphone 11</h3>
        </div>
        <p>helo worldhelo worldhelo worldhelo worldhelo worldhelo worldhelo worldhelo worldhelo worldhelo worldhelo worldhelo world</p>
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
          <div className='deviceDetail_bottom-btns'>
            <button><span>00</span></button>
            <button><span>00</span></button>
            <button><span>00</span></button>
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
              <button className='btnStyle-CustomWidth btnStyle-gray'>Pay Monthly</button>
              <button className='btnStyle-CustomWidth btnStyle-gray'>Pay in Full</button>
            </div>
          </div>
          <div className='deviceDetail_bottom-priceInfo'>
            <div className='deviceDetail_bottom-price'>
              <h3>$24</h3>
            </div>
            <div className='deviceDetail_bottom-payments'>
              <h3>$24/<span>mo.</span></h3>
              <p>For 24 mos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default deviceDetail
