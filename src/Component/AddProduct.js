import React, { useState } from 'react';
import axios from 'axios';
import Navbaradmin from "./Navbaradmin";
import { useNavigate } from 'react-router-dom';
import "./AddProduct.css"
 
function AddProduct() {
  const [formData, setFormData] = useState({
    productid: '',
    pname: '',
    manufacturedate: '',
    expirydate: '',
    price: '',
    quantity: '',
    stock: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate=useNavigate();
 
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/save', formData);
      alert("Product Added Successfully.");
      if (response.status === 200) {
        
        console.log('Product added successfully');
        navigate("/home")
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error during product addition:', error);
    }
  };
 
  return (
 
    <div>
        <Navbaradmin/>
      <div id="bgimg"className="bg-gray-100 p-4 rounded-md shadow-md">
        <h1 className="text-lg font-bold mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col width:30px items-left">
          <label className="mb-2">Product ID</label>
          <input type="text" name="productid" onChange={handleChange} style={{ width:'250px'}}className="w-48 border p-1 rounded mb-1" />
          <label className="mb-2">Product Name</label>
          <input type="text" name="pname" onChange={handleChange} style={{ width:'250px'}}className="w-full border p-1 rounded mb-1" />
          <label className="mb-2">Manufacture Date</label>
          <input type="date" name="manufacturedate" onChange={handleChange} style={{ width:'250px'}}className="w-full border p-1 rounded mb-1" />
          <label className="mb-2">Expiry Date</label>
          <input type="date" name="expirydate" onChange={handleChange} style={{ width:'250px'}}className="w-full border p-1 rounded mb-1" />
          <label className="mb-2">Price</label>
          <input type="text" name="price" onChange={handleChange} style={{ width:'250px'}}className="w-full border p-1 rounded mb-1" />
          <label className="mb-2">Quantity</label>
          <input type="text" name="quantity" onChange={handleChange}style={{ width:'250px'}} className="w-full border p-1 rounded mb-1" />
          <label className="mb-2">Stock</label>
          <input type="text" name="stock" onChange={handleChange} style={{ width:'250px'}}className="w-full border p-1 rounded mb-1" />
          {/*<button type="button" onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer">
            Submit
  </button>*/}
  <button
          type="submit" style={{ width:'250px'}}
          className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          
        >
          Submit
        </button>
        </form>
      </div>
    </div>
  );
}
 
export default AddProduct;