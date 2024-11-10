import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch("localhost:4000/get");
      const responseObj = await response.json();
      setCoinData(responseObj.data);
    };

    getApi();
  });

  return (
    <div className="App">
      <table>
        <thead>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Market Cap</th>
          <th scope="col">Circulating Supply</th>
          <th scope="col">Change &</th>
          <th scope="col">Last (24H)</th>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default App;
