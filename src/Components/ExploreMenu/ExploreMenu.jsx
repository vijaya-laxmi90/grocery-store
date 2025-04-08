import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Explore our menu today and treat yourself to a culinary adventure, delivered right to your doorstep with just a few taps. Whether you're craving something savory or sweet, our curated selection offers something for every palate. From gourmet burgers and handcrafted pizzas to fresh salads and decadent desserts, our dishes are prepared with the finest ingredients to ensure every bite is a delight.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className='explore-menu-list-item'
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
