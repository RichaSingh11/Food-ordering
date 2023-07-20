import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () =>
{
    //As we cannot return two elements side by side example MealSummary and AvailableMEals both so we wrap up in  fragment  and then return.

    return (
        <Fragment> 
            <MealsSummary />
            <AvailableMeals />

        </Fragment>
    );
};

export default Meals;