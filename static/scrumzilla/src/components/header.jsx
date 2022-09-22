import React, { useEffect, useState } from "react";
import { invoke } from "@forge/bridge";

const Header = () => {
  const [data1, setData1] = useState(null);

  useEffect(() => {
    invoke("doCalculation", { name : 'Soumitro', values: {value1: '1', value2: '2'} }).then((data) => {
      setData1(JSON.stringify(data));
    });
  }, []);

  return <div> Header shows! {data1? data1 : "Loading..."}</div>;
}

export default Header;
