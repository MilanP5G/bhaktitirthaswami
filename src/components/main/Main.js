import React from 'react';
import mainImage from '../../assets/BhaktiTirthaSwamiMain.png'
import '../../styling/main.css'

const Main = () => {

  return (
    <div className='origin-box'>
      <div className='origin-image'>
        <img alt='Bhakti Tirtha Swami' src={mainImage} />
      </div>
    </div>

  )

}

export default Main;
