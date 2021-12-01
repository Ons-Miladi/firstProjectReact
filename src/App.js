import logo from './logo.svg';
import './App.css';

import Recipie from './Recipie';
import React ,{useEffect,useState}from 'react';

const App =()=>{
const APP_ID="17aa8e5c";
const APP_KEY="178f6887a9a397d8e7bce6a57626aa3f";
//const exple=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
const [counter,setCounter]=useState(0);
const[recipies,setRecipies]=useState([]);
const[search,setSearch]=useState("");
const [query,setQuery]=useState("chicken");
useEffect(()=>{
  getRecipes();
},[query])
const getSerach=e=>{
  e.preventDefault();
  setQuery(search)
  setSearch('')
}
const getRecipes= async()=>{
const response=await fetch(
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
const data = await response.json();
console.log(data);
setRecipies(data.hits);
}
const updateSearch =e =>{
  setSearch(e.target.value)
  console.log(search)
}
  return (
    <div className="App">
<form onSubmit={getSerach} className="search-form">
  <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
  <button type="submit" className="search-button">Search</button>
  
</form>

<div className="recipies">
{recipies.map(recipie=>(
<Recipie title={recipie.recipe.label} calories={recipie.recipe.calories} image={recipie.recipe.image} ingredients={recipie.recipe.ingredients}/>
))}
</div>
    </div>
 
  )

}

export default App;
//<h1 onClick={()=>setCounter(counter +1)}>{counter}</h1>