import React, { useState, useEffect} from 'react';
import './App.css';
import Characters from './components/Character'
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [info, setInfo] = useState([]);


  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res =>{
      console.log(res.data)
      setInfo(res.data.results)
    })
    .catch(err =>{
      debugger
    })
  }, [])

  console.log(info[0])
  

  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      {info.map((item) => (
        <Characters information={item} />
      ))}
      {
        console.log(info.item)
      }

      
    </div>
  );
}

export default App;
