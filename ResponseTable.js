import React from 'react'

  const ResponseTable = ({countries}) => {
      return (
          <div>
          <div>
          <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Continent</th>
              <th scope="col">Country Name</th>
              <th scope="col">Latitude & Longitude</th>
              <th scope="col">Capital</th>
              <th scope="col">Population</th>
              <th scope="col">Flag</th>
            </tr>
          </thead>
          <tbody>

      {
        countries.map((country,index)=>{
          return(
                <tr key={index}>
                    <th scope="row">{country.region}</th>
                    <td>{country.name}</td>
                    <td>{country.latlng}</td>
                    <td>{country.capital}</td>
                    <td>{country.population}</td>
                    <img src={country.flag} alt={country.name} className='imgData'/>
                </tr>
          )
        })
      }
       </tbody>
          </table>
            </div>
            </div>
      )
  }

export default ResponseTable
