import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleHomeClick}>Back toHome</button>
      <h1>About WatchWise</h1>
      <p>
        Welcome to WatchWise, your go-to destination for the finest watches.
      </p>
      <p>
        We offer a wide range of watches from various brands, ensuring quality
        and style.
      </p>
      <p>
        Our mission is to provide our customers with the best shopping
        experience.
      </p>
      <button onClick={handleHomeClick}>Back to Home</button>
    </div>
  );
}
