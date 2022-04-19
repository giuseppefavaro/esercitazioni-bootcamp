import './App.css';

import { useState } from "react";

import {Intro} from "./components/intro";
import {Cities} from "./components/cities";
import {Weather} from "./components/weather";

const apiKey = "1d00d4c9d5554bbb1fc814776caff71d";

function App() {

  const [location, setLocation] = useState("N/A");
  const [temp, setTemp] = useState(0);
  const [status, setStatus] = useState("N/A");

  const [img, setImg] = useState("50n");

  const update = async (value) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`;
    // console.log(url);

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    setLocation(data.name);
    setTemp(data.main.temp);
    setStatus(data.weather[0].description);

    setImg(data.weather[0].icon);
    
  }

  return (
    <main className='card'>
      <Intro />
      <Cities notify={update} />
      <Weather location={location} temp={temp} status={status} img={img} />
    </main>
  );


}

export default App;
