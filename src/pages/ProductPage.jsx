import "../CSS/ProductPage.css";
import NavBar from "../components/Nav";
import { useState, useEffect } from "react";
import data from "../assets/cakes.json";
import cart from "../assets/cart.png";
import whatsapp from "../assets/whatsapp.png";

function ProductPage() {
  const itemKey = localStorage.getItem("key");
  const item = data.find((cake) => cake.id === Number(itemKey));

  const [selectedWeight, setSelectedWeight] = useState("1kg");
  const [cartItems, setCartItems] = useState([]); 

  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);


  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  function handleWeightSelection(weight) {
    setSelectedWeight(weight);
  }

  
  const addToCart = () => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id && cartItem.selectedWeight === selectedWeight);

    if (existingItem) {
      setCartItems(prevCart =>
        prevCart.map(cartItem =>
          cartItem.id === item.id && cartItem.selectedWeight === selectedWeight
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, selectedWeight, qty: 1 }]);
    }
  };

  const removeItem = (itemId, selectedWeight) => {
    const updatedCart = cartItems.filter(
      (cartItem) => !(cartItem.id === itemId && cartItem.selectedWeight === selectedWeight)
    );
    setCartItems(updatedCart);
  };

  return (
    <>
      <NavBar />
      <div className="productPageCardWrapper">
        <div className="productPageCard">
          <div className="productPageImg">
            <img src={item.imageSrc} alt={item.name} />
          </div>
          <div className="productPageVariations">
            <h1 className="productPageName">{item.name}</h1>
            <p className="productPageDes">{item.description}</p>
            <div className="variations">
              <div className="weightVariations">
                {["1kg", "2kg", "3kg", "4kg+"].map((weight) => (
                  <button
                    key={weight}
                    className={`weightButton ${selectedWeight === weight ? "selected" : ""}`}
                    onClick={() => handleWeightSelection(weight)}
                  >
                    {weight}
                  </button>
                ))}
              </div>
              Variations:
              <select>
                <option>{item.variations[0].type}</option>
                <option>{item.variations[1].type}</option>
              </select>
            </div>
            <h1 className="price">Total Price: Ksh.{item.startingPrice}</h1>
            <div className="buyBtns">
              <button onClick={addToCart}>
                <div>
                  <img src={cart} alt="cart" /> Add to Cart
                </div>
              </button>
              <button className="whatsapp">
                <div>
                  <img src={whatsapp} alt="whatsapp" /> Whatsapp
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

    {cartItems.length > 0 ? <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((cartItem) => (
            <li key={`${cartItem.id}-${cartItem.selectedWeight}`}>
              {cartItem.name} ({cartItem.selectedWeight}) - Qty: {cartItem.qty}
              <button onClick={() => removeItem(cartItem.id, cartItem.selectedWeight)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button className="checkOutBtn">Check Out</button>
      </div> : null}  
    </>
  );
}

export default ProductPage;
