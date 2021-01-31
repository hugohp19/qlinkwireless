import React from 'react';
import '../style/components/deviceCard/deviceCards.scss';
import DeviceTemplate from './deviceCardTemplate';
import FirstImage from '../assets/images/byop.png';
import galaxy6 from '../assets/images/galaxy_a6.png';
import galaxy10 from '../assets/images/galaxy_A10e.png';
import iphoneXS from '../assets/images/iphone_xs_max.png';
import poblano from '../assets/images/poblano_vle5.png';
import quest5 from '../assets/images/quest5.png';


const DeviceCard = ({index, device}) => {
  let brands = ['HP', 'ZTE', 'SAMSUNG', 'APPLE'];
  let deviceBrand = brands.filter(brand => device.Description.toUpperCase().includes(brand));
  console.log(device.Description)
  console.log(deviceBrand)
  let deviceImages = [galaxy6, galaxy10, iphoneXS, poblano, quest5];

  console.log(index)

  if(index === 0){

  }

  return (
  <>
    {(index === 0) ? <DeviceTemplate /> :''}
    <div className='deviceCard-container'>
      <div className='deviceCard-imgContainer'>
        <img src={deviceImages[index]} alt='Device'/>
      </div>
      <div className='deviceCard-top'>
        <p>{deviceBrand[0] ? deviceBrand[0]: 'QLink'}</p>
        <h3>{device.Name}</h3>
      </div>
      <div className='deviceCard-bottom'>
        <p>Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.</p>
      </div>
      <button className='btnStyle'>View Details</button>
    </div>
  </>
  )
}

export default DeviceCard;
