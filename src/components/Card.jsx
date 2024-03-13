import React from "react";
import './Card.css';

function Card(Probs)
{
    return(
        
        <div className="card">

       {Probs.imgSrc && <img className="card-img" src={Probs.imgSrc} alt={Probs.imgAlt} />} 
             <h1 className="card-title">{Probs.Titile}</h1>
             <p className="card-description">{Probs.Description}</p>
             <a href={Probs.link} className="card-btn">{Probs.btnText}</a>
        </div> 
       
    )   
    
}
export default Card;

// import React from "react";
// export const Card = () => {
//     return( 
// <div>
// <img src="https://picsum.photos/id/237/200/300" alt="Card Dog" />
//              <h1>Card Titile</h1>
//              <p>This is card description</p>
//              <a href="CardPage">Learn More</a>
// </div>     )      
// };

