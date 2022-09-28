import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import "./App.css";

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
      Good Girl
    </div>
  );
}

export default App;
