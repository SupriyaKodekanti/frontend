import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    let navigate = useNavigate();

    // State for Customer
    const [customer, setCustomer] = useState({
        username: "",
        last_name: "",
        email: "",
        address: "",
        phno: "",
        password: "",
        confirm_Password: "",
    });

    // State for Customer errors
    const [customerErrors, setCustomerErrors] = useState({
        username: "",
        last_name: "",
        email: "",
        address: "",
        phno: "",
        password: "",
        confirm_Password: "",
    });

    // State for success message
    const [successMessage, setSuccessMessage] = useState("");

    // State for error message
    const [errorMessage, setErrorMessage] = useState("");

    const validateCustomer = () => {
        const errors = {};

        // Example validation
        if (!customer.username.trim()) {
            errors.username = "First Name is required";
        }
        if (!customer.username.trim().length>3) {
            errors.username = "Name should more than 3 letters";
        }
        if (!customer.last_name.trim()) {
            errors.last_name = "Last Name is required";
        }
        if (!customer.last_name.trim().length>3) {
            errors.last_name = "Last Name should more than 3 letters";
        }
        

        if (!customer.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(customer.email)) {
            errors.email = "Invalid email format";
        }

        if (!customer.phno.trim()) {
            errors.phno = "Mobile is required";
        } else if (!/^\d{10}$/.test(customer.phno)) {
            errors.phno = "Invalid mobile number";
        }

        if (!customer.address.trim()) {
            errors.address = "Address is required";
        }
        if (!customer.address.trim().length>5) {
            errors.address = "Full Address is required";
        }

        if (!customer.password.trim()) {
            errors.password = "Password is required";
        } else if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                customer.password
            )
        ) {
            errors.password =
                "Password must contain at least 8 characters, including at least one letter, one number, and one special character";
        }

        if (!customer.confirm_Password.trim()) {
            errors.confirm_Password = "Confirm Password is required";
        } else if (customer.password !== customer.confirm_Password) {
            errors.confirm_Password = "Passwords do not match";
        }

        setCustomerErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const onInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Validate customer data
        const isValid = validateCustomer();

        if (isValid) {
            try {
                // API endpoint for customer registration
                const response = await axios.post("http://localhost:8080/register", customer);

                // Check if the 'data' property exists before accessing it
                const responseData = response && response.data;

                // Set success message
                setSuccessMessage("Registration successful");

                // Clear the form and errors
                setCustomer({
                    username: "",
                    last_name: "",
                    email: "",
                    address: "",
                    phno: "",
                    password: "",
                    confirm_Password: "",
                });
                setCustomerErrors({});
                setErrorMessage(""); // Clear  previous error messages

                // Redirect or handle success
            } catch (error) {
                // console.error("Error during registration:", error.response.data);

                // Set error message
                setErrorMessage("Error during registration. Please try again.");

                // Clear success message
                setSuccessMessage("");
            } finally {
                navigate("/UserLogin");
            }
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900 bg-cover bg-center" style={{ backgroundImage: `url("https://wallpaper.dog/large/20589868.jpg")` }}>
            <form onSubmit={onSubmit} className="mt-6 max-w-md  p-8 border border-gray-300 rounded-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
                    Customer Registration
                </h2>
                <div className="flex-1">
                
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your Full Name"
                            value={customer.username}
                            onChange={onInputChange}
                        />
                        <span className="text-red-500">{customerErrors.username}</span>
                  
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your Last Name"
                            value={customer.last_name}
                            onChange={onInputChange}
                        />
                        <span className="text-red-500">{customerErrors.last_name}</span>
                    
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your Email"
                            value={customer.email}
                            onChange={onInputChange}
                        />
                        <span className="text-red-500">{customerErrors.email}</span>
                    
                        <label htmlFor="phno" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Mobile
                        </label>
                        <input
                            type="text"
                            id="phno"
                            name="phno"
                            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your Mobile Number"
                            value={customer.phno}
                            onChange={onInputChange}
                        />
                        <span className="text-red-500">{customerErrors.phno}</span>
                    
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your Address"
                            value={customer.address}
                            onChange={onInputChange}
                        />
                        <span className="text-red-500">{customerErrors.address}</span>
                   
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your Password"
                            value={customer.password}
                            onChange={onInputChange}
                        />
                        <span className="text-red-500">{customerErrors.password}</span>
                        <label htmlFor="confirm_Password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm_Password"
                            name="confirm_Password"
                            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 focus:outline-none focus:border-blue-500"
                            placeholder="Confirm your Password"
                            value={customer.confirm_Password}
                            onChange={onInputChange}
                        />
                        <span className="text-red-500">{customerErrors.confirm_Password}</span>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
            </form>

        </section>
    );
}

export default Register;