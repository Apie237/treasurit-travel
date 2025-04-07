import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [useCase, setUseCase] = useState("");
  const [helpText, setHelpText] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Your EmailJS service details
  const EMAIL_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
  const EMAIL_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
  const EMAIL_USER_ID = "YOUR_USER_ID"; // Replace with your EmailJS user ID

  // Ensure EmailJS is initialized when component mounts
  useEffect(() => {
    // Check if EmailJS is available and initialize it
    if (window.emailjs && EMAIL_USER_ID) {
      window.emailjs.init(EMAIL_USER_ID);
    }
  }, []);

  // Function to send data via EmailJS
  const sendViaEmailJS = async () => {
    if (!window.emailjs) {
      console.error("EmailJS is not loaded");
      alert("Email service is not available. Please try again later.");
      return false;
    }
    
    try {
      setIsSubmitting(true);
      
      // Prepare template parameters
      const templateParams = {
        name,
        email,
        country,
        phone: phoneNumber,
        useCase,
        message: helpText,
        submissionDate: new Date().toISOString()
      };
      
      // Send the email using EmailJS
      const response = await window.emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams
      );
      
      console.log("EmailJS SUCCESS:", response);
      alert("Form submitted successfully!");
      return true;
      
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      alert("We couldn't process your submission. Please try again later.");
      return false;
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    // Send the data via EmailJS
    const emailSent = await sendViaEmailJS();
    
    // Reset form after submission if successful
    if (emailSent && currentState === "Sign Up") {
      setName("");
      setEmail("");
      setPassword("");
      setCountry("");
      setPhoneNumber("");
      setUseCase("");
      setHelpText("");
      setAgreeToTerms(false);
    }
  };

  // List of all countries in the world
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", 
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", 
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", 
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", 
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", 
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", 
    "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", 
    "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", 
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", 
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
    "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", 
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", 
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", 
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  return (
    <div className="flex justify-center items-center h-[120vh] login-bg">
      <div className="bg-white rounded-lg shadow-lg w-[95%] sm:max-w-lg p-10">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center gap-6 text-gray-800"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <h2 className="text-3xl font-semibold text-gray-700">{currentState}</h2>
            <hr className="border-orange-300 h-[1.5px] w-10 bg-gray-800" />
          </div>

          {currentState === "Login" ? null : (
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full px-5 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
              placeholder="Name"
              required
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-5 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="w-full px-5 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
            placeholder="Password"
            required
          />

          <div className="flex w-full gap-4">
            <select
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              className="w-1/2 px-5 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
              required
            >
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="tel"
              className="w-1/2 px-5 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Use Case Select with full width */}
          <select
            onChange={(e) => setUseCase(e.target.value)}
            value={useCase}
            className="w-full px-5 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
            required
          >
            <option value="">Select Use Case</option>
            <option value="Diaspora Protection">Diaspora Protection</option>
            <option value="B2B, B2C, C2C">B2B, B2C, C2C Use Cases</option>
            <option value="Enterprise B2C">Enterprise B2C</option>
            <option value="B2G Use Cases">B2G Use Cases</option>
            <option value="Agency Escrow">Agency Escrow</option>
            <option value="Import/Export">Import/Export Use Cases</option>
          </select>

          <textarea
            onChange={(e) => setHelpText(e.target.value)}
            value={helpText}
            className="w-full px-5 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
            placeholder="How can we help?"
            rows="5"
            required
          ></textarea>

          <div className="w-full flex justify-between text-base mt-[-8px]">
            <p className="cursor-pointer text-orange-600 hover:underline">
              Forgot Your Password
            </p>
            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("Sign Up")}
                className="cursor-pointer text-orange-600 hover:underline"
              >
                Create Account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer text-orange-600 hover:underline"
              >
                Login Here
              </p>
            )}
          </div>

          <div className="w-full flex items-center text-base mt-[-8px]">
            <input
              onChange={() => setAgreeToTerms(!agreeToTerms)}
              checked={agreeToTerms}
              type="checkbox"
              required
              className="w-5 h-5"
            />
            <p className="ml-3">
              I agree to the{" "}
              <span className="text-orange-600 cursor-pointer hover:underline">
                terms and conditions
              </span>
            </p>
          </div>

          <button
            className="bg-orange-600 text-white font-medium px-10 py-3 text-lg rounded hover:bg-orange-700 transition-all"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;