import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import { Navbar, ScanButton } from '../components/Shared';

const Home = () => {
  const [url, setUrl] = useState("");
  const { isLoggedIn, scanCount, incrementScan } = useAuth();
  const navigate = useNavigate();

  const handleScan = () => {
    if (!isLoggedIn && scanCount >= 2) {
      alert("Trial limit reached. Please login to continue scanning.");
      navigate('/login');
      return;
    }
    incrementScan();
    navigate('/result', { state: { url } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-blue-600 to-blue-400 p-8 text-center text-white">
        <h1 className="text-3xl font-bold mt-12 mb-4">Protect YourSelf from Phishing Attacks</h1>
        <p className="mb-8 opacity-90">Scan any URL to check if it's safe.</p>
        
        <div className="max-w-md mx-auto flex gap-2">
          <input 
            type="text" 
            placeholder="Enter URL here" 
            className="flex-1 p-3 rounded text-gray-800 outline-none"
            onChange={(e) => setUrl(e.target.value)}
          />
          <ScanButton onClick={handleScan} />
        </div>

        {!isLoggedIn && (
          <p className="mt-4 text-xs">Free scans remaining: {Math.max(0, 2 - scanCount)}</p>
        )}
      </main>
    </div>
  );
};