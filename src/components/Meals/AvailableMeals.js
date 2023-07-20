import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-ordering-d5cd7-default-rtdb.firebaseio.com/meals.json'); 
      const responseData = await response.json(); // Becaus ethis function returns a object hence we need to convert it into an array which contains (name, decription etc ) as objects
                                

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;


/* Because this function returns a object hence we need to convert it into an array which contains (name, decription etc ) as objects ,

ResponseData in as object and we need arrya so to transform that we are doing this. key in for loop contains (m1 , m2 and so on),
Values for keys will be the nested objects lik name,desciprion etc..., 
Hence we are pushing one by one object in loadedItems .array. */

