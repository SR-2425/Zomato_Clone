import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const foodItems = [
  { id: 1, name: "Burger", price: 129, image: "https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?w=600&auto=format&fit=crop&q=60" },
  { id: 2, name: "Pizza", price: 249, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Pasta", price: 199, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop" },
  { id: 4, name: "Biryani", price: 299, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyyYW5pfGVufDB8fHwwfHw%3D" },
  { id: 5, name: "Butter Chicken", price: 349, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Gulab Jamun", price: 99, image: "https://www.chefadora.com/_next/image?url=https%3A%2F%2Fchefadora.b-cdn.net%2F003f0f0351967a7cb6212a8d9bfaf889_f956154e73.jpg&w=3840&q=75" },
  { id: 7, name: "Paneer Tikka", price: 199, image: "https://cookingfromheart.com/wp-content/uploads/2017/03/Paneer-Tikka-Masala-4.jpg" },
  { id: 8, name: "Dosa", price: 149, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACh1yWbIwNiWJOZ-8lkt9oGkf5cdMK4DV8Q&s" },
  { id: 9, name: "Lassi", price: 79, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQlIz_DnMJ-5w_dErD9gNV_khWZuLHU3q0w&s" },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (food) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${food.name} added to cart! 🛒`);
  };

  const filteredFood = foodItems.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg py-4 px-6 flex justify-between items-center z-50 transition-all duration-300 ease-in-out">
        <h1 className="text-3xl font-bold text-red-500">Tomato</h1>
        <div className="flex items-center gap-6 animate-fadeIn">
          <Link to="/" className="text-gray-700 hover:text-red-500">Home</Link>
          <Link to="/restaurants" className="text-gray-700 hover:text-red-500">Restaurants</Link>
          <Link to="/orders" className="text-gray-700 hover:text-red-500">Orders</Link>
          <Link to="/cart">
            <FaShoppingCart className="text-2xl cursor-pointer text-gray-700 hover:text-red-500 transition transform hover:scale-110" />
          </Link>
          <Link to='/login' className='text-gray-700 hover:text-red-500 flex items-center gap-2'>
            <FaUser className='text-xl' /> Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-10 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-fadeIn">Delicious Food, Delivered Fast</h2>
        <p className="text-gray-600 mb-6">Find your favorite meal and enjoy hassle-free delivery</p>
        <div className="relative w-3/4 mx-auto max-w-lg">
          <input
            type="text"
            placeholder="Search for food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-12 rounded-full text-white bg-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:outline-none shadow-lg"
          />
          <FaSearch className="absolute left-4 top-3 text-gray-400 text-xl" />
        </div>
      </div>

      {/* Food Items Section */}
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-slideUp transition-all duration-500 ease-in-out">
        {filteredFood.map((food) => (
          <motion.div
            key={food.id}
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 ease-in-out"
          >
            <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
              <p className="text-red-500 text-lg font-bold">₹{food.price}</p>
              <button
                onClick={() => addToCart(food)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full font-semibold shadow-md hover:bg-red-600 transition"
              >
                Add to Cart 🛒
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
