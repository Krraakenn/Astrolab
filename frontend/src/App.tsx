import logo from "./assets/images/logo_astrolab.png";
import "./App.css";

function App() {
  return (
    <div className="box">
      <div>
        <p id="astrolab">
          <span>A</span>
          <span>S</span>
          <span>T</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>A</span>
          <span>B</span>
        </p>
      </div>
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}

export default App;
