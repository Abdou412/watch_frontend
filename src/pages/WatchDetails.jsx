import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function WatchDetails() {
  const { id } = useParams();
  const [watch, setWatch] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3636/api/watches/${id}`)
      .then((response) => {
        setWatch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!watch) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{watch.name}</h1>
      <p>Brand: {watch.brand}</p>
      <p>Price: {watch.price}</p>
      <p>In Stock: {watch.inStock}</p>
      <div className="ImageContainer">
        <img src={watch.imgURL} alt={watch.name} />
      </div>
    </div>
  );
}
