import "./menu.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/crear" className="button">
        Formu!
      </Link>
    </div>
  );
}

export default App;
