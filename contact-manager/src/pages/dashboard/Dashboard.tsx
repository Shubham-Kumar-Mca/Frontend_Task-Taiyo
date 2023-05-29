import React, { FC } from 'react';
import { useQuery } from "react-query"
import axios from 'axios';
import "./Dashboard.css";
import GlobalData from '../../components/globalData/GlobalData';
import GraphData from '../../components/graphData/GraphData';
import CountryData from '../../components/countryData/CountryData';

const gettingData = (url:string) => {
  return axios.get(url).then(res => res.data)
}

const Dashboard : FC = () => {
  // Fetch global COVID-19 data
  const { data: globalData, isLoading: globalDataLoading } = useQuery("globalData", () => gettingData("https://disease.sh/v3/covid-19/all"));

  // Fetch historical COVID-19 data for graph
  const { data: historicalData, isLoading: historicalDataLoading } = useQuery("historicalData", () => gettingData("https://disease.sh/v3/covid-19/historical/all?lastdays=all"))

  // Fetch country-specific COVID-19 data for map
  const { data: countryData, isLoading: countryDataLoading } = useQuery("countryData", ()=>gettingData("https://disease.sh/v3/covid-19/countries"));


  return (
    <div className='Dashboard__cotainer'>
      <h2>COVID-19 Dashboard</h2>
      {globalDataLoading ? <h2 style={{marginTop : "1rem"}}>Loading...</h2> : <GlobalData globalData={globalData} />}

      {historicalDataLoading ? <h2 style={{marginTop : "1rem"}}>Loading...</h2>: <GraphData historicalData={historicalData} />}
      
      {countryDataLoading ? <h2 style={{marginTop : "1rem"}}>Loading...</h2>: <CountryData countryData={countryData} />}
    </div>
  )
}

export default Dashboard