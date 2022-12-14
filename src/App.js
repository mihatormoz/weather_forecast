import { useState } from "react";
import './styles/style.css'
import WeatherForm from "./components/WeatherForm";
import WeatherItem from "./components/WeatherItem";

function App() {
  const [data, setData] = useState({})
  const [isData, setIsData] = useState(false)
  return (
    <div className="App">
      <WeatherForm setData={setData} setIsData={setIsData}/>
      {isData
      ? <WeatherItem data={data}/>
      : <h2 className="card" style={{display: 'flex', justifyContent: 'center'}}>Введите город</h2>}
    </div>
  );
}

export default App;
