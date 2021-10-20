import React, { Component } from 'react'
// import Select from 'react-select'

// const options = [
//   { value: 'stockholm', label: 'Stockholm' },
//   { value: 'malmo', label: 'Malmö' },
//   { value: 'goteborg', label: 'Göteborg' }
// ]

// export const Dropdown = () => (
//   <div style= {{width: "300px"}}> <Select options={options} /></div>
// )

export function Dropdown() {

    return (

      <div className= "dropdown">
        <select name="cities" id="citySelect">
        <option disabled selected value> Välj en stad! </option>
          <option value="stockholm">Stockholm</option>
          <option value="malmo">Malmö</option>
          <option value="goteborg">Göteborg</option>
        </select>
      </div>


    )

}