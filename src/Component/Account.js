import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
 
function Account() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
 
  const handleLogoutClick = () => {
    // Add your logout logic here
    console.log("User logged out!");
 
    // Redirect to the root route (landing page)
    navigate("/");
  };
 
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-md shadow-md">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWd2Er6aGk46GpGePsuN9SgkYasGWZfc0L2jtrg4dSenLmtdD7kcWxTKaG0qp1osENax4&usqp=CAU"
            alt="Product 1"
            className="w-full h-30 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2">Customer Details</h3>
          <p className="text-blue-500 font-semibold">Customer Id</p><p>000001</p>
          <p className="text-blue-500 font-semibold">Address</p><p>East Street, Vizag</p>
          <p className="text-blue-500 font-semibold">Phone Number</p><p>9139883988</p>
        </div>
      </div>
 
      {/* Log Out Button below the Admin grid card */}
      <div className="flex justify-start mt-4">
        <button
          onClick={handleLogoutClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
 
export default Account;