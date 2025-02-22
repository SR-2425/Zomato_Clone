import React, { useEffect, useState } from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../pages/Header"; // ✅ Added Header

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (index) => {
    let updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total amount in ₹
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* ✅ Added Header component */}
      
      <div className="py-20 px-6">
        {/* Cart Heading */}
        <h1 className="text-4xl font-extrabold text-red-500 text-center mb-6">
          Your Cart <FaShoppingCart className="inline-block ml-2" />
        </h1>

        {cartItems.length > 0 ? (
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border-b hover:bg-gray-100 transition duration-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-700 font-bold">₹{item.price.toFixed(2)}</p>

                {/* Remove Item Button */}
                <button
                  className="bg-red-500 text-white px-3 py-2 rounded-md text-sm hover:bg-red-600 transition flex items-center gap-2"
                  onClick={() => removeFromCart(index)}
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}

            {/* Total & Checkout */}
            <div className="flex justify-between items-center mt-6 px-4">
              <h2 className="text-2xl font-bold">Total:</h2>
              <span className="text-2xl font-extrabold text-green-600">
                ₹{totalAmount.toFixed(2)}
              </span>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/checkout"
                className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 inline-block"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            Your cart is empty. Add some delicious food!
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
