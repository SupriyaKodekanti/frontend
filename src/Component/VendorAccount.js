import React from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "./Navbaradmin";
 
function VendorAccount() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
 
  const handleLogoutClick = () => {
    // Add your logout logic here
    console.log("User logged out!");
 
    // Redirect to the root route (landing page)
    navigate("/");
  };
 
  return (
    <div>
      <Navbaradmin/>
      <section className="bg-white dark:bg-gray-900 bg-cover bg-center" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/clean-medical-background_53876-116875.jpg?size=626&ext=jpg&ga=GA1.1.528249459.1700570054&semt=ais")` }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-md shadow-md">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWd2Er6aGk46GpGePsuN9SgkYasGWZfc0L2jtrg4dSenLmtdD7kcWxTKaG0qp1osENax4&usqp=CAU"
            alt="Product 1"
            className="w-full h-30 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2">Vendor Details</h3>
          <p className="text-blue-500 font-semibold">Vendor Id</p><p>1033022</p>
          <p className="text-blue-500 font-semibold">Address</p><p>123, Wellness Street, Vizag</p>
          <p className="text-blue-500 font-semibold">Phone Number</p><p>9999999999</p>
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
      </section>
    </div>
  );
}
 
export default VendorAccount;