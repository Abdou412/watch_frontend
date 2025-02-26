import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [watches, setWatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3636/api/watches/")
      .then((response) => {
        setWatches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>WatchWise</h1>
      <div className="WatchGrid">
        {watches.map((watch) => (
          <div key={watch._id} className="WatchCard">
            <Link to={`/watches/${watch._id}`}>
              <h2>{watch.name}</h2>
              <p>Brand: {watch.brand}</p>
              <p>Price: {watch.price}</p>
              <p>In Stock: {watch.inStock}</p>
              <div className="ImageContainer">
                <img src={watch.imgURL} alt={watch.name} />
              </div>
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/api/watches/${watch._id}`);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (
                  window.confirm(
                    `Are you sure you want to delete ${watch.name}?`
                  )
                ) {
                  axios
                    .delete(`http://localhost:3636/api/watches/${watch._id}`)
                    .then((response) => {
                      console.log("Watch deleted:", response.data);
                      setWatches(watches.filter((w) => w._id !== watch._id));
                    })
                    .catch((error) => {
                      console.error(
                        "There was an error deleting the watch!",
                        error
                      );
                    });
                }
              }}
            >
              Delete Watch
            </button>
          </div>
        ))}
      </div>
      <Link to="/api/watches">Add Watch</Link>
    </>
  );
}

export default App;
