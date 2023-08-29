import React from 'react';
import propTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
  <div>
    <h3>I love {name}</h3>
    <h2>{rating} / 5.0</h2>
    <img src={picture} alt={name} width="300px"/>
  </div>
  );
}

const foodILike = [
  {id:1,
    name : ' Kimch',
   image : 'https://img.choroc.com/newshop/goods/024444/024444_1.jpg',
  rating : 4.5
  },
  {id:2,
    name : 'yuk-hoi',
   image : 'https://i.namu.wiki/i/yUng9QLAEuvdSFliWKSnXGpNV_XzcAQG_LpkZMvCQ5tWB4rvyKAODwn8QQ_oStMABpQJv4B7uz_dULefC9E7OhVRXrfr-FPYHD07acR4r2_RTrg7M2-3vuBXPNzrCS5UBh6G4YSBGq5HOZx9JOzJxg.webp',
  rating : 3.6
  },
  {id:3,
    name : '',
   image : 'https://w7.pngwing.com/pngs/412/821/png-transparent-apple-logo-apple-logo-company-heart-logo.png',
  rating : 3.0
  },
  {id:4,
    name : 'jjigae',
   image : 'https://i.ytimg.com/vi/PH_-nGRatgo/maxresdefault.jpg',
  rating : 4.8
  }
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }
// const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

function App() {
  // console.log(foodILike.map(renderFood));
  return (
    <div>
      
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
      {/* {foodILike.map(dish => <renderFood />)} */}

    </div>
  );
}

export default App;
