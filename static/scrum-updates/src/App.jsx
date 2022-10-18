import React, { useEffect, useState } from "react";
import Select from "@atlaskit/select";
import TextArea from "@atlaskit/textarea";
import Button from "@atlaskit/button";
import "bootstrap/dist/css/bootstrap.min.css";
import { invoke } from "@forge/bridge";
import "./App.css";
function App() {
  const [updateType, setUpdateType] = useState();
  const [textareaValue, setTextAreaValue] = useState();
    useEffect(() => {
    invoke("getText", { example: "my-invoke-variable" }).then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);
  return (
    <div className="App container text-start">
      <div className="text-center" style={{fontWeight:"600", color:"#5E6C84"}}>My Updates</div>
      <div style={{ marginTop: "10px" }}>
        <Select
          inputId="compare-with-selector"
          onChange={(value) => setUpdateType(value)}
          value={updateType}
          className="updates-select"
          classNamePrefix="user-updates-select"
          placeholder="Select update type..."
          options={[
            { label: "What did I work on yesterday?", value: "0" },
            { label: "What am I working on today?", value: "1" },
            { label: "What issues are blocking me?", value: "2" },
          ]}
        />
      </div>

      <TextArea
        className="mt-2 background-grey"
        appearance="subtle"
        resize="auto"
        maxHeight="20vh"
        name="area"
        placeholder="Brief about your updates for this issue here..."
        value={textareaValue}
        onChange={(value) => setTextAreaValue(value)}
      />
      <div className="d-flex justify-content-center mt-2">
        <Button appearance="primary">Submit</Button>
      </div>
    </div>
  );
}

export default App;
