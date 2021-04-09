import { useState } from 'react';
import './App.css';

function App() {
  const hide_nav = ()=>{
    console.log('hiding navigation bar');
    document.getElementById('ul').classList.toggle('red')
  }

  const Api_Key = '1cce5ee9b6733a5caebe3291219f2c1d'

  const [temp, settemp] = useState('')
  const [atm, setatm] = useState('')
  const [icon, seticon] = useState('')

  var Icon = `http://openweathermap.org/img/w/${icon}.png`
  const [City_Name, set_City_Name] = useState('')
  const run = ()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City_Name}&appid=${Api_Key}&units=metric`)
    .then(response => response.json())
    .then((data) =>{ 
      settemp(data.main.temp)
      setatm(data.weather[0].main)
      seticon(data.weather[0].icon)
    }
    )
  }
  
  const input_city = (e)=>{
    set_City_Name(e.target.value)
  }

  

  return (
    <div className="App">


      <header>
          <nav>
            <button className="menu_btn" onClick={hide_nav}>X</button>
              <ul id='ul'>
                <li><a>Weather App</a></li>        
                <li><a>Developer</a></li>        
                <li><a>Contacts</a></li>        
              </ul>    
          </nav>
        </header>


        <div className="sec_1">
          <input type="text" placeholder='City Name' id='city_name' onChange={input_city}/>
          <button id='search_btn' onClick={run}>Search</button>
        </div>

        <div className="box">
          <h1>{City_Name}</h1>
          <h3>
            Tempruture : {temp} ceslsius
          </h3>
          <h3>
            Atmosphare : {atm}
          </h3>
          <h3>
            <img src={Icon} className='icon'/>
          </h3>
        </div>

    </div>
  );
}

export default App;
