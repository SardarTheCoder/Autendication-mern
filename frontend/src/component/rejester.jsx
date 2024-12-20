import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setLoading(false);
      setError("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setLoading(false);
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 6) {
      setLoading(false);
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setSuccess(data.message);
        setEmailSent(true);
        setFormData({ name: "", email: "", password: "" });
      } else {
        setError(data.message || "Error registering user.");
      }
    } catch (error) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-gradient-to-tr from-purple-500 via-black to-purple-700 shadow-xl shadow-purple-800 rounded-lg hover:shadow-2xl transition-all w-full max-w-md"
        noValidate
      >
        <h2 className="text-2xl font-bold text-center text-purple-100 mb-6">Register</h2>

        {/* Success message */}
        <div
          aria-live="polite"
          className={`mb-4 text-center ${success ? "text-green-600" : ""}`}
        >
          {success}
        </div>

        {/* Error message */}
        <div
          aria-live="assertive"
          className={`mb-4 text-center ${error ? "text-red-600" : ""}`}
        >
          {error}
        </div>

       
       

        <div className="mb-4">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="mb-4">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="mb-4">
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <p className="text-sm text-gray-300 mt-1">Must be at least 6 characters long.</p>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-white font-bold py-2 rounded-md hover:bg-purple-700 hover:text-white transition"
          disabled={loading}
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-t-4 border-white border-solid rounded-full animate-spin mx-auto"></div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;
