import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [coinData, setCoinData] = useState([]);

  const filterCoinData = (data = []) => {
    const filteredData = [];

    data.forEach((rawRow) => {
      const filteredRow = [];
      const keys = Object.keys(rawRow);
      keys.forEach((key) => {
        if (["name", "symbol"].includes(key)) {
          filteredRow[key] = rawRow[key];
        } else if (key === "circulating_supply") {
          filteredRow[key] = displayNumber(rawRow[key]);
        }
      });
    });
  };

  useEffect(() => {
    const getApi = async () => {
      console.log("getting");
      const response = await fetch("http://localhost:4000/get");
      const responseObj = await response.json();
      console.log("setting");
      console.log(responseObj.data);
      setCoinData(responseObj.data);
    };
    getApi();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Circulating Supply</th>
            <th scope="col">Change &</th>
            <th scope="col">Last (24H)</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
