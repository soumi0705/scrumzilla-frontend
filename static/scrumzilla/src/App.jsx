import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HomePage from "./components/homePage";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke("getText", { example: "my-invoke-variable" }).then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
