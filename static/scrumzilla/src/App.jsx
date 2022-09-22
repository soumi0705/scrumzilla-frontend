import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";
import Header from "./components/header";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke("getText", { example: "my-invoke-variable" }).then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <div>
      {data ? data : (
        "Loading..."
      )}
      <Header />
    </div>
  );
}

export default App;
