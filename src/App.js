import "./App.css";
import Header from "./components/commonComponents/header/Header";
import Card from "./components/card/Card";
import Dropdown from "./components/dropdown/Dropdown";
import image from "./coronavirus-5107715_1920.png";
import Footer from "./components/commonComponents/footer/Footer";

function App() {
  return (
    <div className="covidTracker-container">
      <Header />
      <div className="main-container">
        <div className="top-container">
          <div className="liveStatus-heading">
            <span className="liveStatus">
              <img
                src={image}
                alt="loading"
                style={{ width: "60px", height: "50px" }}
              />
              Live Status
            </span>
          </div>
          <div className="dropDown-section">
            <div className="flag">flag</div>
            <div className="dropdown">
              <Dropdown />
            </div>
          </div>
        </div>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
