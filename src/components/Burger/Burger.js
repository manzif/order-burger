import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  let ingredients = Object.keys(props.ingredients)
    .map(ingrendientKey => {
      return [...Array(props.ingredients[ingrendientKey])].map((_, index) => {
        return (
          <BurgerIngredient
            key={ingrendientKey + index}
            type={ingrendientKey}
          />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {ingredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
