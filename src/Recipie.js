import React from "react";
import style from './receipie.module.css';
const Recipie=({title,calories,image,ingredients})=>{
return (
    <div  className={style.receipie}>
        <h1>
          {title}
        </h1>
        <ol>
            {ingredients.map(ingredient=>(
               <li> {ingredient.text}</li>
            ))}
         </ol>
        <p>
           {calories}
        </p>
        <img src={image} className={style.image} alt=""/>
       
    </div>
)
}
export default Recipie;