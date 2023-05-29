import React, { FC } from 'react'
import "./GlobalData.css"

interface GlobalDataProps {
  globalData: {
    cases: number;
    deaths: number;
    recovered: number;
  };
}

const GlobalData : FC<GlobalDataProps> = ({ globalData }) => {
  return (
    <div className='globalData__container'>
      <h3>Global Data :- </h3>
      <p>Total Cases : {globalData.cases}</p>
      <p>Total Deaths : {globalData.deaths}</p>
      <p>Total Recovered : {globalData.recovered}</p>
    </div>
  )
}

export default GlobalData