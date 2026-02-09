import React from "react";

const ConfidenceMeter = ({score}) => {
    return (
<div className="mt-3">
    <p>Risk Score : {score}%</p>
    <div className="w-full bg-gray-200 rounded">
        <div className="bg-red-500 h-3 rounded"
         style={{ width: `${score}%` }}>
             </div>
    </div>
</div>
    );
};
export default ConfidenceMeter;