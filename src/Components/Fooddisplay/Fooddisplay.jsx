import React, { useContext } from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../../context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'


const Fooddisplay= ({category='All'} )=> {
 const{food_list}=useContext(Storecontext)
   
 console.log('Category:', category)  //adding this line extra

  console.log('Food List:', food_list)  //adding this line extra



  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item,index)=>{

         if(category==="All" || category===item.category){
          console.log('Item Category:', item.category); //adding this line extra
            return (
            <FoodItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image} 
            />
            );
         }
         return null
           
        })}
      </div>
    </div>
  )
}

export default Fooddisplay


