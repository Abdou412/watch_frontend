import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function EditWatch() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    inStock: "",
    imgURL: "",
    buyLink: "", // Add buyLink to the form data
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3636/api/watches/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error(error);
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
    if (window.confirm("Are you sure you want to update this watch?")) {
      axios
        .put(`http://localhost:3636/api/watches/${id}`, formData)
        .then((response) => {
          console.log("Watch updated:", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.error("There was an error updating the watch!", error);
        });
    }
  };

  return (
    <div className="EditWatch">
      <h1>Edit Watch</h1>
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
        <div>
          <label>Buy Link:</label>
          <input
            type="text"
            name="buyLink"
            value={formData.buyLink}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Watch</button>
      </form>
    </div>
  );
}
