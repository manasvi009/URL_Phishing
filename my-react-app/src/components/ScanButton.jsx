import React from "react";

const ScanButton = ({onScan}) => {
return (
    <button onClick={onScan}
    className="bg-green-600 text-white px-6 py-2 rounded mt-4">
        Scan URL
    </button>
);
};

export default ScanButton;