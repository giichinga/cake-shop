import "../CSS/ShoppingCard.css";
import PropTypes from "prop-types";
import {  useNavigate } from "react-router-dom";


function ShoppingCard(props) {

  const navigate  = useNavigate();

  function saveSelected() {
    const itemId = props.itemId;
    localStorage.setItem("key", itemId);
    console.log(localStorage.getItem("key"));  
    navigate('/product')
  }
  

  return (
    <div className="shoppingCard">
      <img 
        src={props.src}
        alt= {props.name}
        
      />
      <p className="productName">{props.name}</p>
      <h2 className="productPrice">From Ksh. {props.price}</h2>
      <button className="addToCart" onClick={saveSelected} >Order This</button>
    </div>
  );
}

ShoppingCard.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    itemId: PropTypes.number.isRequired,
}

ShoppingCard.defaultProps = {
    src: "https://placehold.co/300",
    name: "A type of Cake",
    price: 0.00,
}


export default ShoppingCard;
