import React from 'react';
import { Bell, Menu, Search, ChevronDown } from 'lucide-react';

const History = () => {
  const data = [
    { url: 'www.host.com', status: 'Phishing', score: '92%', date: '05/12/2024' },
    { url: 'www.host.com', status: 'Safe', score: '15%', date: '05/10/2024' },
    { url: 'www.host.com', status: 'Phishing', score: '87%', date: '05/08/2024' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg">Scan History</h1>
        <div className="flex gap-3">
          <Bell size={20} />
          <Menu size={20} />
        </div>
      </header>

      <div className="p-4">
        <div className="relative mb-4">
          <input className="w-full bg-gray-100 p-2 pl-8 rounded border text-sm" placeholder="Search..." />
          <Search size={14} className="absolute left-2 top-3 text-gray-400" />
          <ChevronDown size={14} className="absolute right-2 top-3 text-gray-400" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-2 border border-blue-800">URL Scanned</th>
                <th className="p-2 border border-blue-800 text-center">Result</th>
                <th className="p-2 border border-blue-800 text-center">Risk Score</th>
                <th className="p-2 border border-blue-800 text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2 text-gray-600">{item.url}</td>
                  <td className="p-2 text-center">
                    <span className={`px-2 py-0.5 rounded text-white ${item.status === 'Phishing' ? 'bg-red-500' : 'bg-green-500'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-2 text-center font-medium text-gray-700">{item.score}</td>
                  <td className="p-2 text-center text-gray-500">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;