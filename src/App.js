import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan")

  const YOUR_APP_ID = "a911cddf";
  const YOUR_APP_KEY = "bb2988463749d9f564c78cf76984989a";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits)
    console.log(result.data);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    getRecipes();

  }


  return (
    <div className="app">
      <h1 >Food Recipes Plaza</h1>

      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="search" />

        <select className="app__healthLabels">
          <option onClick = {() => {sethealthLabels("vegan")}}>Vegan</option>

          <option onClick = {() => {sethealthLabels("vegetarian")}}>vegetarian</option>

          <option onClick = {() => {sethealthLabels("paleo")}}>paleo</option>

          <option onClick = {() => {sethealthLabels("dairy-free")}}>dairy-free</option>

          <option onClick = {() => {sethealthLabels("gluten-free")}}>gluten-free</option>

          <option onClick = {() => {sethealthLabels("wheat-free")}}>wheat-free</option>

          <option onClick = {() => {sethealthLabels("low-suagr")}}>low-suagr</option>

          <option onClick = {() => {sethealthLabels("egg-free")}}>egg-free</option>

          <option onClick = {() => {sethealthLabels("peanut-free")}}>peanut-free</option>



        </select>


      </form>


      <div className = "app__recipes">
        {recipes.map((recipe,index) => {
          return <RecipeTile recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
