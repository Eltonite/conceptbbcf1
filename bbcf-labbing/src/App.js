import Homedev from "./Homedev";
import Navbar from "./Navbar";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Homebbcf from "./Homebbcf";
import EsHome from "./EsHome";
import HakumenHome from "./HakumenHome";
import RagnaHome from "./RagnaHome";

function App() {
  return (
      <Router className='flex-col'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ggst" element={<Homedev />}></Route>
          <Route path="/dbfz" element={<Homedev />}></Route>
          <Route path="/bbcf" element={<Homebbcf />}></Route>
          <Route path="/bbcf/Es" element={<EsHome />}></Route>
          <Route path="/bbcf/Hakumen" element={<HakumenHome />}></Route>
          <Route path="/bbcf/Ragna" element={<RagnaHome />}></Route>
        </Routes>
      </Router>
  );
}

export default App;

