import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditWatch() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    inStock: "",
    imgURL: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3636/api/watches/${id}`).then((response) => {
      setFormData(response.data);
    });
  }, [id]);

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
      .put(`http://localhost:3636/api/watches/${id}`, formData)
      .then((response) => {
        console.log("Watch updated:", response.data);
        // Optionally, redirect or clear the form
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error updating the watch!", error);
      });
  };

  return (
    <div className="EditWatch">
      <h1 >Edit Watch</h1>
      <Link to="/">HOME</Link>
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
        <button type="submit">Update Watch</button>
      </form>
    </div>
  );
}
