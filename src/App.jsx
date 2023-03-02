
import './App.css'
import { Route, Routes } from 'react-router-dom'
import countriesJson from './countries.json'
import Navbar from './components/Navbar'
import CountryDetails from './components/CountryDetails'
import CountriesList from './components/CountriesList'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState(countriesJson)
  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
      .catch(err =>
        console(err))

  }, []
  )
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Navbar />
          <div className="row">
            < CountriesList countries={countries} />
            <Routes>
              <Route path='/:alpha3Code' element={< CountryDetails countries={countries} />}></Route >
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;