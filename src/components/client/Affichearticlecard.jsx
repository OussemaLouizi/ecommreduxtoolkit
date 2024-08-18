import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from "../../features/cartSlice";

import { useNavigate } from "react-router-dom";

const Affichearticlecard = () => {
  const dispatch = useDispatch();
let navigate=useNavigate();

const handleAddToCart = (art) => {
dispatch(addToCart(art));
navigate("/cart");
};
    const {articles,isLoading,error}=useSelector((state)=>state.storearticles)
  return (
    <div className="card-container">
      { isLoading ?(
        <h1><center>....Loading</center></h1>)
        :error ? (
            <h1><center> Erreur de connection</center></h1>
        ):
        (
articles.map((article,index)=>
    <div className='card' key={index}>
    <img src={article.imageart} width={80} height={80} alt ={article.reference}/>
    <div className='card-content'>
    <h1 className='card-title'>{article.reference}</h1>
    <p className='card-description'>{article.designation.substr(0,20)}</p>
    <h1 className='card-title'>Prix : {article.prix} TND</h1>  
    <button className='card-button' disabled={article.qtestock<=1}
onClick={() => handleAddToCart(article)}><i className="fa-solid fa-cart-shopping"></i>Add to card</button>
</div>
</div>
))}
    </div>
  )
}

export default Affichearticlecard
