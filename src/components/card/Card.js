import React from "react";
import alertImage from "./stay-home-save-lives-4983843_1280.png";
import "./Card.css";
import { useEffect,useState } from "react";

function Card() {
  // const[covidData,setCovidData] = useState(null);

  // useEffect(() => {
  //  fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
  //  .then((res) => res.json())
  //  .then((result) =>setCovidData(result) )
  //  .catch((err) => console.log(err))
  // }, [])

  return (
    <div className="card">
      <div className="covid-image">
        <img className="alertImage" src={alertImage} alt="loading" />
      </div>
      <div className="detail">
        <div className="status-card" style={{borderBottom:"10px solid blue",marginTop:"2%",background:"lightblue"}}>
          <div className="status-container">
            <p>Active</p>
            <h5>r</h5>
            <h4>Number of active cases of covid-19</h4>
          </div>
        </div>
        <div className="status-card" style={{borderBottom:"10px solid lightgreen",background:"#C6FFC1",}}>
          <div className="status-container">
            <p>Recovered</p>
            <h5>5656</h5>
            <h4>Number of recoveries from covid-19</h4>
          </div>
        </div>
        <div className="status-card" style={{borderBottom:"10px solid red", background:"#E28F83"}}>
          <div className="status-container">
            <p>Deaths</p>
            <h5>9899</h5>
            <h4>Number of death caused by covid-19</h4>
          </div>
        </div>
        <div className="status-card" style={{borderBottom:"10px solid lightgrey", background:"white"}}>
          <div className="status-container">
            <p>Total</p>
            <h5>9899</h5>
            <h4>Number of Total Cases caused by covid-19</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
