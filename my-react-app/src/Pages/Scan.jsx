const ScanResult = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen border-x">
      <header className="bg-blue-700 text-white p-4 flex items-center">
        <button className="mr-4">←</button>
        <h1 className="font-bold">Scan Result</h1>
      </header>
      <div className="bg-red-500 text-white text-center py-2 text-sm">Warning: Phishing Website Detected!</div>
      <div className="p-6 text-center">
        <div className="bg-red-500 text-white py-3 rounded mb-6 font-bold">This URL is flagged as PHISHING!</div>
        <div className="text-left">
          <h3 className="font-bold text-blue-900 border-b mb-2">Risk Analysis</h3>
          <p className="text-sm">Phishing Risk: <span className="text-red-500 font-bold">92%</span></p>
          <div className="w-full bg-gray-200 h-3 rounded-full mt-2 overflow-hidden">
            <div className="bg-red-500 h-full w-[92%]"></div>
          </div>
          <RiskExplanation risks={["Contains suspicious keywords", "Uses HTTP instead of HTTPS", "Has multiple subdomains"]} />
        </div>
      </div>
    </div>
  );
};