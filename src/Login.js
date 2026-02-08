import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:3001/users?email=${form.email}&password=${form.password}`
      );

      if (res.data.length > 0) {
        setStatus("Login successful!");
      } else {
        setStatus("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setStatus("Network Error: JSON Server not reachable.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />

      <p>{status}</p>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

