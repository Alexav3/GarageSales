import React, { useState } from "react";
import "../styles/SignIn.css"; // Make sure the path is correct

function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Sign in:", form);
    setLoading(false);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="signin-error">{error}</div>}
        <div className="signin-field">
          <label className="signin-label">Email:</label>
          <input
            className="signin-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="signin-field">
          <label className="signin-label">Password:</label>
          <input
            className="signin-input"
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </label>
        </div>
        <button className="signin-button" type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default SignIn;
