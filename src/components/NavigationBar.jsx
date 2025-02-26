import { Link } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <h1>WatchWise</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/api/watches">Add Watch</Link>
      </nav>
    </div>
  );
}
