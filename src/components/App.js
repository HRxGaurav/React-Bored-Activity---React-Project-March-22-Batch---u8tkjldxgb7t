import React, { useState, useEffect } from "react";
import "../styles/App.css";

const Loader = () => <div id="loader">Loading...</div>;

const App = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("education");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(false);

    const response = await fetch(
      `http://www.boredapi.com/api/activity?type=${type}`
    );
    const json = await response.json();
    setData(json);
    setIsLoading(true);
  };

  useEffect(() => {
    getData();
  }, []);

  function education() {
    setType("education");
    getData();
  }

  function recreational() {
    setType("recreational");
    getData();
  }

  return (
    <div id="main">
      {!isLoading && <Loader />}
      {isLoading && <div id="activity">{data.activity}</div>}

      <button id="btn-education" onClick={education}>
        Education
      </button>
      <button id="btn-recreation" onClick={recreational}>
        Recreational
      </button>
    </div>
  );
};

export default App;
