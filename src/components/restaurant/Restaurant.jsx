import React, { useEffect, useState } from "react";

export default function Restaurant() {
  const [pizzaRecipes, setPizzaRecipes] = useState([]);
  const [onionRecipes, setOnionRecipes] = useState([]);
  const [saladRecipes, setSaladRecipes] = useState([]);

  const getData = async (category, setRecipes) => {
    let response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${category}`
    );
    let data = await response.json();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    getData("pizza", setPizzaRecipes);
    getData("onion", setOnionRecipes);
    getData("salad", setSaladRecipes);
  }, []);

  return (
    <div>
      <section>
        <h2 className="text-info">Pizza Recipes</h2>
        <div className="row">
          {pizzaRecipes.map((recipe) => (
            <div className="col-md-4 p-5" key={recipe.recipe_id}>
              <h3>{recipe.title}</h3>
              <img
                src={recipe.image_url}
                className="img-fluid"
                alt="Recipe image"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-info" >Onion Recipes</h2>
        <div className="row">
          {onionRecipes.map((recipe) => (
            <div className="col-md-4 p-5" key={recipe.recipe_id}>
              <h3>{recipe.title}</h3>
              <img
                src={recipe.image_url}
                className="img-fluid"
                alt="Recipe image"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-info">Salad Recipes</h2>
        <div className="row">
          {saladRecipes.map((recipe) => (
            <div className="col-md-4 p-5" key={recipe.recipe_id}>
              <h3>{recipe.title}</h3>
              <img
                src={recipe.image_url}
                className="img-fluid"
                alt="Recipe image"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
