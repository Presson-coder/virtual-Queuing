import React from 'react';
import breakfast from './../assets/breakfast.png';
import lunch from './../assets/best_lunch.png';
import dinner from './../assets/supper.png';
import dessert from './../assets/dessert.png';
import special from './../assets/spec.png';
import fridge from './../assets/fridge.png';
import mealplanner from './../assets/plannning.png';
import nutrition from './../assets/calculator.png';
import cost from './../assets/cost1.png';



const Meals = () => {
    const allmeals = [
        {
            name : 'Breakfast',
            image : breakfast,
            description : 'Start your day right! Explore our delicious breakfast recipes - from energizing smoothies to hearty omelets. Find your perfect morning fuel!'
        },
        {
            name : 'Lunch',
            image : lunch,
            description : 'Lunch is a serious matter. Find the perfect lunch recipe to keep you going throughout the day. From salads to sandwiches, we have you covered!'
        },
        {
            name : 'Dinner',
            image : dinner,
            description : 'Dinner is served! Explore our delicious dinner recipes - from family-friendly classics to elegant entrees. Find the perfect recipe to make your evening special!'    
        },
        {
            name : 'Dessert',
            image : dessert,
            description : 'Life is short - eat dessert first! Explore our delicious dessert recipes - from decadent cakes to light and refreshing treats. Find the perfect recipe to satisfy your sweet tooth!'
        },
        {
            name : 'special occasions',
            image : special,
            description : 'Celebrate in style! Explore our delicious recipes for special occasions - from elegant appetizers to show-stopping desserts. Find the perfect recipe to make your event unforgettable!'
        },
        {
            name : 'Fridge Raid',
            image : fridge,
            description : 'Feeling creative? Raid your fridge and create a masterpiece! Find the perfect recipe to use up those leftovers and create a delicious meal from scratch!'
        }
    ]

    const operations = [
        {
            name : 'Meal Pannning Assistant',
            image : mealplanner,
            description : 'Struggling to plan your meals? Let our Meal Planning Assistant help! Enter your dietary preferences and we will create a personalized meal plan just for you!'
        },
        {
            name : 'Nutrition Calculator',
            image : nutrition,
            description : 'Curious about the nutritional content of your favorite recipes? Use our Nutrition Calculator to find out! Enter the ingredients and serving size and get instant nutrition information!'
        },
        {
            name : 'Recipe cost estimator',
            image : cost,
            description : 'Want to save money on groceries? Use our Recipe Cost Estimator to find out how much your favorite recipes cost to make! Enter the ingredients and serving size and get instant cost information!'
        }
    ]

    return (
        <div className='container mx-auto mb-14 rounded-lg grid grid-cols-3 gap-4'>
          {allmeals.map((meal,index)=>(
            <div className="card w-96 bg-base-100 shadow-xl p-12" key={index}>
              <figure>
                <img src={meal.image} alt="sample food" className='shadow-xl' />
              </figure>
              <div className="card-body">     
                <h2 className="card-title text-green-500">{meal.name}</h2>
                <p>{meal.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">explore</button>
                </div>
              </div>
            </div>
          ))}

          { operations.map((operation,index)=>(
            <div className="card w-96 bg-base-100 shadow-xl image-full" key={index}>
            <figure><img src={operation.image} alt="dishcover operator" /></figure>
            <div className="card-body">
              <h2 className="card-title text-green-500">{operation.name}</h2>
              <p>{operation.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">explore</button>
              </div>
            </div>
          </div>
          ))}
        </div>

      );
};

export default Meals