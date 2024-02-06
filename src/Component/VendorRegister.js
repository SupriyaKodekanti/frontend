import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VendorRegister() {
  let navigate = useNavigate();

  // State for Vendor
  const [vendor, setVendor] = useState({
    fname: '',
    lname: '',
    email: '',
    license: '',
    certificate: '',
    phnno: '',
    password: '',
    cpassword: '',
  });

  // State for Vendor errors
  const [vendorErrors, setVendorErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    license: '',
    certificate: '',
    phnno: '',
    password: '',
    cpassword: '',
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  const validateVendor = () => {
    const errors = {};

    if (!vendor.fname.trim()) {
      errors.fname = "First Name is required";
    }
    if (!vendor.lname.trim()) {
      errors.lname = "Last Name is required";
    }

    if (!vendor.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(vendor.email)) {
      errors.email = "Invalid email format";
    }

    if (!vendor.phnno.trim()) {
      errors.phnno = "Mobile is required";
    } else if (!/^\d{10}$/.test(vendor.phnno)) {
      errors.phnno = "Invalid mobile number";
    }

    if (!vendor.license.trim()) {
      errors.license = "License is required";
    }

    if (!vendor.certificate.trim()) {
      errors.certificate = "Certificate is required";
    }

    if (!vendor.password.trim()) {
      errors.password = "Password is required";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(vendor.password)) {
      errors.password =
        "Password must contain at least 8 characters, including at least one letter, one number, and one special character";
    }

    if (!vendor.cpassword.trim()) {
      errors.cpassword = "Confirm Password is required";
    } else if (vendor.password !== vendor.cpassword) {
      errors.cpassword = "Passwords do not match";
    }

    setVendorErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onInputChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate vendor data
    const isValid = validateVendor();

    if (isValid) {
      try {
        // API endpoint for vendor registration
        const response = await axios.post("http://localhost:8080/vregister", vendor);

        // Set success message
        setSuccessMessage("Registration successful");

        // Clear the form and errors
        setVendor({
          fname: '',
          lname: '',
          email: '',
          license: '',
          certificate: '',
          phnno: '',
          password: '',
          cpassword: '',
        });
        setVendorErrors({});
        setErrorMessage(""); // Clear previous error messages

        // Redirect or handle success
        navigate("/VendorLogin");
      } catch (error) {
        console.error("Error during registration:", error.response.data);

        // Set error message
        setErrorMessage("Error during registration. Please try again.");

        // Clear success message
        setSuccessMessage("");
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 bg-cover bg-center" style={{ backgroundImage: `url("https://wallpaper.dog/large/20589868.jpg")` }}>
      <form onSubmit={onSubmit} className="mt-6 max-w-md  p-8 border border-gray-300 rounded-md ">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
                    Vendor Registration
                </h2>
        <div className="flex-1">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 text-colour:green">First Name</label>
          <input
            type="text"
            placeholder="Enter your First Name"
            className="block w-full py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            name="fname"
            value={vendor.fname}
            onChange={onInputChange}
           /> <span className="text-red-500">{vendorErrors.fname}</span>
     
  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
  <input
    type="text"
    placeholder="Enter your Last Name"
    className="block w-full py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    name="lname"
    value={vendor.lname}
    onChange={onInputChange}
  />
  <span className="text-red-500">{vendorErrors.lname}</span>
  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
  <input
    type="email"
    placeholder="Enter your email"
    className="block w-full py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    name="email"
    value={vendor.email}
    onChange={onInputChange}
  />
  <span className="text-red-500">{vendorErrors.email}</span>
  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mobile</label>
  <input
    type="text"
    placeholder="Enter your mobile number"
    className="block w-full py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    name="phnno"
    value={vendor.phnno}
    onChange={onInputChange}
  />
  <span className="text-red-500">{vendorErrors.phnno}</span>
  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">License</label>
  <input
    type="text"
    placeholder="Enter your license information"
    className="block w-full py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    name="license"
    value={vendor.license}
    onChange={onInputChange}
  />
  <span className="text-red-500">{vendorErrors.license}</span>
  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Certificate</label>
  <input
    type="text"
    placeholder="Enter your certificate information"
    className="block w-full py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    name="certificate"
    value={vendor.certificate}
    onChange={onInputChange}
  />
  <span className="text-red-500">{vendorErrors.certificate}</span>
  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
  <input
    type="password"
    placeholder="Enter your password"
    className="block w-full py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    name="password"
    value={vendor.password}
    onChange={onInputChange}
  />
  <span className="text-red-500">{vendorErrors.password}</span>
  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
  <input
    type="password"
    placeholder="Enter your confirm password"
    className="block w-full py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    name="cpassword"
    value={vendor.cpassword}
    onChange={onInputChange}
  />
  <span className="text-red-500">{vendorErrors.cpassword}</span>
</div>

        <button
          type="submit"
          className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit
        </button>

        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </form>
    </section>
  );
}

export default VendorRegister;