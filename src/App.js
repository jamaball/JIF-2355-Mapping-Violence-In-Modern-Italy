import './App.css';
import {useState} from 'react';

function App() {
  //const [description, setDescription] = useState('Click on a point to view is data here');
  const [active, setActive] = useState(false)
  return (
    <div className="App">
      <header className='header'>
        <p>GMU History Dept. Mapping Volience In Italy</p>
      </header>
      <div className="Map">
        <div id="italyImg"/>
            <button className='button' onClick={() => setActive(!active)}></button> 
        </div>    
      <div className='DataInfo'>
        <InfoBar isActive={active === true}/>
      </div>
    </div>
  );
}

let jsonData = {
  "Name" : "Chris",
  "Location" : "Venice",
  "Weapon" : "Gold Crossbow"
}

function InfoBar({isActive}) {
  return (
    <div classname="InfoBar">
      {isActive ? (
        <p>{JSON.stringify(jsonData)}</p>
      ) : (
        <p>Click on a point to view is data here</p>
      )}
    </div>
  );
}



//<p>The description is {description}</p>
//<button className='button' onClick={() => setDescription("No Data")}>Click Me 2</button> 

export default App;
