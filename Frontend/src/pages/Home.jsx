import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const foodItems = [
  { id: 1, name: "Burger", price: 129, image: "https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?w=600&auto=format&fit=crop&q=60" },
  { id: 2, name: "Pizza", price: 249, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Pasta", price: 199, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop" },
  { id: 4, name: "Biryani", price: 299, image: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=2048x2048&w=is&k=20" },
  { id: 5, name: "Butter Chicken", price: 349, image: "https://images.unsplash.com/photo-1630851840401-dc0dcbe5050f?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, name: "Gulab Jamun", price: 99, image: "https://images.unsplash.com/photo-1624972703591-f38dc52d5ecb?q=80&w=2070&auto=format&fit=crop" },
  { id: 7, name: "Paneer Tikka", price: 199, image: "https://images.unsplash.com/photo-1606491956077-eec60b37a9d6?q=80&w=2070&auto=format&fit=crop" },
  { id: 8, name: "Dosa", price: 149, image: "https://images.unsplash.com/photo-1637344967341-9716c7447e2b?q=80&w=2070&auto=format&fit=crop" },
  { id: 9, name: "Lassi", price: 79, image: "https://images.unsplash.com/photo-1590745752159-0f5b6e24c4a5?q=80&w=2070&auto=format&fit=crop" },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFood = foodItems.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-3 px-6 flex justify-between items-center z-50">
        <h1 className="text-3xl font-bold text-red-500">Foodie</h1>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-red-500">Home</Link>
          <Link to="/restaurants" className="text-gray-700 hover:text-red-500">Restaurants</Link>
          <Link to="/orders" className="text-gray-700 hover:text-red-500">Orders</Link>
          <Link to="/cart">
            <FaShoppingCart className="text-xl cursor-pointer text-gray-700 hover:text-red-500 transition" />
          </Link>
          <Link to="/profile">
            <FaUser className="text-xl cursor-pointer text-gray-700 hover:text-red-500 transition" />
          </Link>
        </div>
      </nav>

      {/* Hero Section (Reduced Height) */}
      <motion.div
        className="w-full h-[300px] bg-[url('https://images.unsplash.com/photo-1555992336-03a23f549602?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center text-center text-white mt-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-lg">
          <h1 className="text-4xl font-extrabold">Delicious Food, Delivered Fast 🍽️</h1>
          <p className="text-lg text-gray-300 mt-2">Find and order your favorite meals effortlessly</p>
        </div>
      </motion.div>

      {/* Search Bar (Closer to Grid) */}
      <div className="relative w-full max-w-lg mx-auto mt-4">
        <input
          type="text"
          placeholder="Search for food..."
          className="w-full p-3 pl-12 border border-gray-300 rounded-full shadow-md focus:ring-2 focus:ring-red-400 outline-none text-lg transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-4 top-3 text-gray-500 text-xl" />
      </div>

      {/* Food Items Grid (Reduced Spacing, Larger Prices) */}
      <motion.div
        className="mt-6 px-4 max-w-5xl mx-auto h-[450px] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredFood.length > 0 ? (
          filteredFood.map((food) => (
            <motion.div
              key={food.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={food.image} alt={food.name} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold">{food.name}</h2>
                <p className="text-red-500 text-lg font-semibold mb-3">₹{food.price.toFixed(2)}</p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full text-md font-semibold hover:bg-red-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-lg text-center col-span-3">No food items found</p>
        )}
      </motion.div>

      {/* Footer */}
      <footer className="mt-8 py-4 bg-gray-200 text-center text-gray-700">
        © 2025 Foodie. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
