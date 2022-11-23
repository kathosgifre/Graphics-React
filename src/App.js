import React from "react";
import "./App.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function App() {
  const data = {
    labels: ["EE.UU.", "China", "Japón", "Alemania", "Reino Unido","India","Francia","Italia","Canadá","Corea del Sur","Rusia","Brasil","Australia","España","México","Indonesia","Países Bajos","Arabia Saudita","Turquía","Suiza"],
    datasets: [
      {
        label: "HPIB en MM€",
        backgroundColor: ["#F38E05", "#1B05F3", "#8A05F3", "#F30534", "#B6F305"],
        borderColor: "white",
        borderWidth: 2,
        hoverBackgroundColor:["#1B05F3", "##F38E05", "#F30534", "#8A05F3", "#1B05F3"],
        hoverBorderColor: "yellow",
        data: [19443, 14994,4174,3570,2694,2683,2483,1775,1683,1520,1501,1360,1304,1205,1093,1002, 860.,704.,689.,687.],
        
      },
    ],

  };
  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div className="App" style={{ width: "100%", height: "500px" }}>
      <h1>
        <center>
        The 20 largest economies in 2021 by gross domestic product
        </center>
      </h1>
      <Bar data={data} options={opciones}/>
    </div>
  );
}

export default App;
