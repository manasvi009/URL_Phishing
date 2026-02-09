import React from "react";

const ResultCard = ({result}) => {
     if (!result) return null;
    return (
 <div className={`p-4 rounded text-white ${result.isPhishing ? "bg-red-500" : "bg-green-500"}`}>
    <h2 className="text-xl font-bold">{result.isPhishing ? "Phishing Detected" : "Safe URL"}</h2>
        </div>

    );
};
export default ResultCard;