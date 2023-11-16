import { useState } from 'react';
import './App.css'; 
import Text from './text';  
import Trendyol from './trendyol';
import Navbar from './navbar';
import Footer from './footer';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='page'>
    {/* <button onClick={()=>setShow(show=>!show)}>Show</button>
    {show &&  <Text/>} */}
    <Navbar/>
    <Trendyol/>
    <Footer/>
    </div>
  );
}

export default App;
