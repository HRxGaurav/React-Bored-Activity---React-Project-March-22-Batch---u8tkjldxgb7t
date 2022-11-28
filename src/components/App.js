import React, { useState, useEffect } from 'react'
import '../styles/App.css';

const Loader = () =>{ return <div id="loader">Loading...</div> }

const LoadingStatus = {
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
};


const App = () => {
  const [data,setData] = useState([])
  const [type,setType] = useState("education");
  const [isLoading, setIsLoading] = React.useState(LoadingStatus.IN_PROGRESS);

  
  const getData = async () => {
    // fetch(
    //   `http://www.boredapi.com/api/activity?type=${type}`
    // )

    // .then((results) => results.json(), console.log(isLoading))
    // .then((datAagain) => setData(datAagain), setIsLoading(LoadingStatus.SUCCESS), console.log(isLoading)); 

    const response = await fetch(`http://www.boredapi.com/api/activity?type=${type}`);
    const json = await response.json();
    setData(json);
    setIsLoading(LoadingStatus.SUCCESS)

  };


  useEffect(() => {
    setIsLoading(LoadingStatus.IN_PROGRESS)
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function education() {
    setIsLoading(LoadingStatus.IN_PROGRESS)
    setType("education")
    getData();
      }

  function recreational() {
    setIsLoading(LoadingStatus.IN_PROGRESS)
    setType("recreational")
    getData();
  }

  return (
    <div id="main">
    { isLoading=="IN_PROGRESS" && <Loader/> }
    {isLoading=="SUCCESS" && <div id="activity">{data.activity}</div>}


    <button id="btn-education" onClick={education}>Education</button>
    <button id="btn-recreation" onClick={recreational}>Recreational</button>
    
    </div>
  )
}


export default App;
