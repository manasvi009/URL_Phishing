import { useState } from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Result from './Pages/Result';
import History from './Pages/History';
import About from './Pages/About';
import './App.css'

function App() {
  const [scanResult, setScanResult] = useState(null);
  const [history , setHistory] = useState([]);

  const handleScan = (url) => {
    const result = {
      url,
      isPhishing: Math.random() > 0.5,
      score: Math.floor(Math.random() * 100),
      explanation: "This URL shows suspicious pattern such as unusual characters and missing HTTPS"
    };

    setScanResult(result);
    setHistory((prev) => [result, ...prev]);
  };
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home onScan={handleScan}/>}/>
         <Route path="/result" element={<Result scanResult={scanResult} />} />
        <Route path="/history" element={<History history={history} />} />
        <Route path="/about" element={<About />} />
    </Routes>
   </Router>
  )
}

export default App
