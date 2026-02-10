import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ScanResult from './Pages/Scan';
import History from './Pages/History';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex justify-center">
        {/* Container to mimic mobile app feel on desktop */}
        <div className="w-full max-w-md bg-white shadow-xl min-h-screen relative overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<ScanResult />} />
            <Route path="/history" element={<History />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;