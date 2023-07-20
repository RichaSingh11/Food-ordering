import { Fragment} from 'react';
import mealsImage from  '../../assets/meals.jpg'; 
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


//<Fragment> component is a built-in component provided by React that allows you to group multiple 
//elements together  such as when you have a list of elements or when you want to return adjacent sibling elements.

const Header = (props) =>
{
    return (
    <Fragment> 

    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton  onClick = {props.onShowCart}/>
       
    </header>
    <div className={classes['main-image']}> 
        <img src={mealsImage}  alt="A table full of Delicious food! "/>
    </div>


    </Fragment>
    );

};

export default Header;