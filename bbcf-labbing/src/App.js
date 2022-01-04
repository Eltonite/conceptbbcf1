import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className='flex-col '>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

