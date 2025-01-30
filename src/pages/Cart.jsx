import { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  const addItem = (newItem) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(item => item.id === newItem.id);

      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].qty += 1;  
        return updatedCart;
      } else {
        return [...prevCart, newItem];
      }
    })
  }

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0); 
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.qty}  
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal().toFixed(2)}</p>
      <button onClick={() => addItem({ id: 6, name: 'Orange', price: 1.2, qty: 1 })}> 
        Add Orange
      </button>
    </div>
  );
}

export default Cart;
