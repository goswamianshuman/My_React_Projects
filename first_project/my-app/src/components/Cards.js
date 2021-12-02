import React from 'react'
import Carditem from './Carditem' 
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>These are our newly launched products</h1> 
            <h4>please have a look</h4> 
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <Carditem  
                         src="images/project-I.jpg"  
                         text="First product"
                         lable="FRESH"
                         path="/products"
                        /> 
                        <Carditem  
                         src="images/project-V.jpg"  
                         text="Second product"
                         lable="nice"
                         path="/products"
                        /> 
                        <Carditem  
                         src="images/project-alis.jpg"  
                         text="Third product"
                         lable="wow"
                         path="/products"
                        /> 
                    </ul>
                    <ul className="cards_items">
                    <Carditem  
                         src="images/project-jarvis.jpg"  
                         text="Fourth product"
                         lable="amazing"
                         path="/products"
                        /> 
                         <Carditem  
                         src="images/themaster-project.jpg"  
                         text="fifth product"
                         lable="wonderful"
                         path="/products"
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
