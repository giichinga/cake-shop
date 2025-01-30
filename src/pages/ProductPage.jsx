import PropTypes from "prop-types";
import "../CSS/ProductPage.css";
import NavBar from "../components/Nav";
import { useState } from "react";
import data from  "../assets/cakes.json";
import cart from "../assets/cart.png";
import whatsapp from "../assets/whatsapp.png";

function ProductPage() {

    const itemKey = localStorage.getItem("key");

    const item = data.find((cake) => cake.id === Number(itemKey));

    const [selectedWeight, setSelectedWeight] = useState("1kg");

    function handleWeightSelection(weight) {
        setSelectedWeight(weight);
    } 
    
    return (
        <>
            <NavBar />
            <div className="productPageCardWrapper">
            <div className="productPageCard">
                <div className="productPageImg">
                    <img 
                        src={item.imageSrc}
                        alt={item.name}
                    />
                </div>
                <div className="productPageVariations">
                    <h1 className="productPageName">{item.name}</h1>
                    <p className="productPageDes">{item.description}</p>
                    <div className="variations">
                        <div className="weightVariations">
                           { ["1kg", "2kg", "3kg", "4kg+" ].map((weight) => (
                               <button 
                                   key={weight}
                                   className={`weightButton ${selectedWeight === weight ? "selected" : ""}`}
                                   onClick={() => handleWeightSelection(weight)}
                               >
                                   {weight}
                               </button>
                           ))

                           }
                        </div>
                       Variations: <select>
                            <option>{item.variations[0].type}</option>
                            <option>{item.variations[1].type}</option>
                        </select>
                    </div>
                    <h1 className="price">
                        Total Price: Ksh.{item.startingPrice}
                    </h1>
                    <div className="buyBtns">
                        <button><div><img src={cart}/>Add to Cart</div></button>
                        <button className="whatsapp"><div><img src={whatsapp}/> Whatsapp</div></button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

ProductPage.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    option1: PropTypes.string.isRequired,
    option2: PropTypes.string.isRequired,
    option3: PropTypes.string.isRequired,
    startingPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

ProductPage.defaultProps = {
    src: "https://placehold.co/350",
    name: "A  sweet type of Cake",
    description: "A very delicious cake baked with the best ingredients in East and Central Afrika",
    option1: "StrawBerry",
    option2: "Vanilla",
    option3: "Vegan",
    startingPrice: 0,
};

export default ProductPage;
