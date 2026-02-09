import React from "react";
import ResultCard from "../components/ResultCard";
import ConfidenceMeter from "../components/ConfidanceMeter";
import RiskExplanation from "../components/RiskExplanation";

const Result = ({ scanResult }) => {
    return (
        <div className="p-6">
            <ResultCard result={scanResult}/>
            <ConfidenceMeter score={scanResult.score}/>
            <RiskExplanation explanation={scanResult.explanation}/>
        </div>
    );
};
export default Result;