import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    hobbies: []
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((h) => h !== value)
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/users", form);
      setStatus("Registration successful!");
    } catch (err) {
      setStatus("Error saving user!");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />

      <div>
        Gender:
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
      </div>

      <div>
        Hobbies:
        <input type="checkbox" name="hobbies" value="Reading" onChange={handleChange} /> Reading
        <input type="checkbox" name="hobbies" value="Travelling" onChange={handleChange} /> Travelling
        <input type="checkbox" name="hobbies" value="Music" onChange={handleChange} /> Music
      </div>

      <p>{status}</p>

      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
