import React, { useContext } from "react";
import Card from "../Card/Card";
import "./Cards.css";
import MainContext from "../../../Context/Context";
const Cards = ({ data }) => {
  const { input, setInput } = useContext(MainContext);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 inputCol">
            <div className="input__div">

            <input type="text" placeholder="Search" value={input} onChange={(e)=>setInput(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="row" id="cardsCourses">
          {data.map((dataItem, index) => {
            return <Card dataItem={dataItem} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
