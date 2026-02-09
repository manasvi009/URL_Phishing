import React , {useState} from "react";
import UrlInput from "../components/UrlInput";
import ScanButton from "../components/ScanButton";

const Home = ({ onScan }) => {
  const [url, setUrl] = useState("");

  return (
    <div className="page p-6">
        <h2 className="text-2xl font-bold mb-4">
            Protect YourSelf From Phishing
        </h2>
        <UrlInput url={url} setUrl={setUrl}/>
        <ScanButton onScan={() => onScan(url)}/>
    </div>
  );
};
export default Home;
