import React from "react";

const RiskExplanation = ({explanation}) => {
    return (
<div className="mt-4">
    <h3 className="font-semibold"> AI Explanation</h3>
    <p className="text-gray-700">{explanation}</p>
</div>
    )
} 
export default RiskExplanation;