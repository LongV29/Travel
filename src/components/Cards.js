import React from 'react';
import './Cards.css';
import CardItem from './CardIem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='imgs/da-nang.jpg'
              text='Đà Nẵng - The city of civilization and modernity'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='imgs/ha-noi.jpg'
              text='Hà Nội - The city ​​of antiquity and respectable customs'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='imgs/ha-giang.jpg'
              text='Hà Giang - The beauty of mountains, rivers, streams and people'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='imgs/hue-tuhong.jpg'
              text='Huế - The beauty of feudalism, the old history still exists'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='imgs/hcm.jpeg'
              text='Hồ Chí Minh - The city of civilization, bustle, development'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;