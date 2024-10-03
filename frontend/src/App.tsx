import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="box">
      <Navbar/>
      <div className="middle-box">
        <div className="add-new-connection">
          <p className="add-new-connection-title">New Connection</p>
          <p className="add-new-connection-type">Connection Type</p>
        </div>
      </div>
    </div>
  );
}

export default App;
