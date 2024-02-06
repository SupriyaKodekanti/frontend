import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, Button, CardActions, CardContent, Divider, TextField } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);

  const [captcha, setCaptcha] = useState(generateRandomCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate = useNavigate();

  const handleRegister = () => navigate("/register");

  const validateForm = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (formData.username.trim() === "" || formData.password.trim() === "") {
      setValidationMessage("Please enter both username and password");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationMsg = "";

    if (!validateForm()) {
      validationMsg = "Please enter both username and password";
    } else if (captchaInput !== captcha) {
      validationMsg = "Captcha validation failed. Please try again.";
      setValid(true);
      setSuccess(false);
    } else {
      try {
        const response = await axios.post("http://localhost:8080/login", formData);

        if (response.status === 200) {
          console.log("User Logged successfully");
          setSuccess(true);
          navigate("/home");
        } else {
          console.error("Failed to Login user");
          validationMsg = "Enter valid credentials";
          setSuccess(false);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          validationMsg = "Enter valid credentials";
        } else {
          console.error("Error during login:", error);
          validationMsg = "Unexpected error occurrence";
        }
        setSuccess(false);
      }
    }

    setTimeout(() => {
      setValidationMessage(validationMsg);
    }, 0);
  };

  const refreshString = () => {
    setCaptchaInput("");
    setCaptcha(generateRandomCaptcha());
  };

  return (
    <section className="bg-gradient-to-r  min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/top-view-world-heart-day-with-copy-space_23-2148610465.jpg?size=626&ext=jpg&ga=GA1.1.528249459.1700570054&semt=ais')` }}>
      <div className="w-full max-w-md p-8  rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-900">CustomerLogin</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              name="username"
              type="text"
              value={formData.username}
              placeholder="Enter your Username"
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password."
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <React.Fragment>
            {success && <Alert className="text-green-500">Successful</Alert>}
            <div className="card">
              <Divider />
              <CardContent>
                <CardActions>
                  <div className="h3">{captcha}</div>
                  <Button startIcon={<RefreshIcon />} onClick={refreshString}></Button>
                </CardActions>
                <label>Enter Captcha</label>
                <TextField
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="w-32"
                />
              </CardContent>
            </div>
          </React.Fragment>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {validationMessage && <p className="text-red-500 mt-2">{validationMessage}</p>}
        {valid && <p className="text-red-500 mt-2">Captcha validation failed. Please try again.</p>}
      </div>
    </section>
  );
};

export default UserLogin;

function generateRandomCaptcha() {
  return Math.random().toString(36).slice(8);
}