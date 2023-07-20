import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem =(props) =>
{
    const cartCtx= useContext(CartContext);
    const price= `Rs.${props.price.toFixed(2)}`;
    
    const addToCartHandler = (amount) =>
    {
        cartCtx.addItem({

            id:props.id , 
            name: props.name ,
            amount : amount , 
            price: props.price
        });

    };

    // To format the price pf the meal taking from DUMMY MEALS ARRAY... this means it will take prices upto 2 decimal places.
    return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
    </li>
    );
};

export default MealItem;