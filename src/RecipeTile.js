import React from "react";
import "./RecipeTile.css"
function RecipeTile({ recipe }) {
  return (
    <div className="recipeTile">
      <img
        className="recipeTile__img"
        src={recipe["recipe"]["image"]}
        alt="pics"
      ></img>
      <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeTile;
