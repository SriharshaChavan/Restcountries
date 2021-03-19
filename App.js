import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ResponseTable from './ResponseTable'
  function App() {
  const[countries, setCountries]=useState([])
  const url='https://restcountries.eu/rest/v2/all';
  
  useEffect(() =>{
    getCountries()
  },[])

  const getCountries=()=>{
    return (axios.get(url) 
    .then(data=>setCountries(data.data)))
  }
  return (
    <div>
    <ResponseTable countries={countries} />
    </div>
  )
}

export default App
