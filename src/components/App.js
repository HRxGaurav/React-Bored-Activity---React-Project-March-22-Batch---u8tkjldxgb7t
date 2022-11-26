import React, { useState, useEffect } from 'react'
import '../styles/App.css';

const Loader = () => <div id="loader">Loading...</div>


const App = () => {
  const [data,setData] = useState([])
  const [type,setType] = useState("education");
  const [load, setLoad] = useState("")

  
  const getData = async () => {
    fetch(
      `http://www.boredapi.com/api/activity?type=${type}`
    )
      .then((results) => results.json())
      .then((datAagain) => setData(datAagain)); 
  };


  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function education() {
    setLoad(data)
    setType("education")
    getData();
  }
  
  function recreational() {
    setLoad(data)
    setType("recreational")
    getData();
  }


  return (
    <div id="main">
    <div id="activity">{data==load ? <Loader/> : data.activity}</div>


    <button id="btn-education" onClick={education}>Education</button>
    <button id="btn-recreation" onClick={recreational}>Recreational</button>
    
    </div>
  )
}


export default App;
