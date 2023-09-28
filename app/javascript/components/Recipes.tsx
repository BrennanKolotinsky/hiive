import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecipesType } from "../types/recipe.ts";

const Recipes = (): JSX.Element => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<RecipesType>([]);

  useEffect(() => {
  	const fetchRecipes = async () => {
    	const url = "/api/v1/recipes/index";
	    const response = await fetch(url);

	    if (response.ok) {
	    	const json = await response.json();
	    	setRecipes(json);
	    } else {
	    	throw new Error("Network response was not ok.");
	    }
  	}

    fetchRecipes();
  }, []);

  const allRecipes = recipes.map((recipe, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={recipe.image}
          className="card-img-top"
          alt={`${recipe.name} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <Link to={`/recipe/${recipe.id}`} className="btn custom-button">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  ));

  const noRecipe = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No recipes yet. Why not <Link to="/new_recipe">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Recipes for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/recipe" className="btn custom-button">
              Create New Recipe
            </Link>
          </div>
          <div className="row">
            {recipes.length > 0 ? allRecipes : noRecipe}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Recipes;
