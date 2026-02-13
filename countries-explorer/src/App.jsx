import './App.css'
import Search from './components/Serach'
import Filter from './components/Filter'
import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";

function App() { 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [region, setRegion] = useState("")

  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm)

  useEffect(() => {
    const handler = setTimeout (() => {
      setDebouncedSearch(searchTerm)
    }, 1000)

    return () => clearTimeout(handler)
  }, [searchTerm])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)
        
        let API_KEY = ""

        if (searchTerm.length >= 2) {
          API_KEY = `https://restcountries.com/v3.1/name/${debouncedSearch}?fields=name,capital,flags,region,population,cca3`
        } else if (region) {
          API_KEY = `https://restcountries.com/v3.1/region/${region}?fields=name,capital,flags,region,population,cca3`;
        } else {
          API_KEY = `https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,cca3`;
        }

        const res = await fetch(API_KEY)

        if (!res.ok) {
          throw new Error("Sorry! failed to fetch countries")
        }

        const result = await res.json();
        setCountries(result);
      } catch (error) {
        setError(error);
        setCountries(null);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries()
  }, [region, debouncedSearch])

  if (loading) {
    return(
      <div className="text-gray-50 text-center my-5">Loading data ...</div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center my-5">Failed to fetch data!</div>      
    )
  }
  
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
  return (
    <div className=''>
      <div className=" w-1/2 mx-auto my-4">
        <h1 className="text-blue-400 text-[4rem] text-center font-bold shadow-sm">🌎 Countries Explorer</h1>
        <p className="text-blue-400 text-center font-bold shadow-sm">Explore different countries all around the world!</p>
        <div className="flex mt-12 mx-3">
          <Search 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Filter 
            region={region}
            setRegion={setRegion}
          />
        </div>
      </div>
      <div className='grid items-center justify-center'>
        <div className="py-4 my-4 grid grid-rows gap-4">
          {filteredCountries.map((country) => {
            return (
              <div key={country.cca3} className="bg-gray-100 rounded-md shadow-md hover:bg-blue-50 transition ease-in hover:shadow-lg">
                <CountryCard country={country} /> 
              </div>
            )
          })}
          {
            filteredCountries.length === 0 && (<div className='text-blue-50 font-semibold'>No Mathced result!</div>)
          }
        </div>        
      </div>
    </div>
  )
}

export default App;