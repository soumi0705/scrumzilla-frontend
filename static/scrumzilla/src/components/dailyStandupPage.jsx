import React, { useEffect, useState } from "react";

function DailyStandup() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Hello World!");
  }, []);

  return <div>Hello World Daily Stand-ups</div>;
}

export default DailyStandup;