import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Users} from "./Users";
import Table from './table';


function App() {
  const [query, setQuery] = useState("");
  const keys =["first_name","last_name","email"]
 
const search = (data)=>{
  return data.filter((item) =>
  keys.some(key=>item[key].toLowerCase().includes(query))
);
};

  return (
    <>
      <div className='app'>
        <h3>Fılter By Outhor</h3>
        <input type="text" placeholder='Find-Users...' className="search" onChange={(e)=> setQuery(e.target.value)} />
        <Table data={search(Users)}/>

      </div>
      
    </>
  );
}

export default App
