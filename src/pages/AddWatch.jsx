import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddWatch() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    inStock: "",
    imgURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3636/api/watches", formData)
      .then((response) => {
        console.log("Watch added:", response.data);
        window.alert("Watch added successfully!");
        // Optionally, redirect or clear the form
      })
      .catch((error) => {
        console.error("There was an error adding the watch!", error);
      });
  };

  return (
    <div>
      <h1>Add Watch</h1>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>In Stock:</label>
          <input
            type="number"
            name="inStock"
            value={formData.inStock}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imgURL"
            value={formData.imgURL}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Watch</button>
      </form>
    </div>
  );
}
