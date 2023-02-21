import axios from "axios";
import React from "react";

const App = () => {
  const handleClk = async () => {
    const res = await axios.get("http://localhost:5001/api/v1/getuser");
    console.log(res.status, res.statusText, res.data);
  };
  return (
    <div>
      <h1>hello App</h1>
      <button onClick={handleClk}>Click</button>
    </div>
  );
};

export default App;
