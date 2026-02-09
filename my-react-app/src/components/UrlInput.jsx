import React from "react";

const UrlInput = ({url , setUrl}) => {
    return (
        <input type="text"
        placeholder="Enter URL here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-3 border rounded"
        />
    );
};
export default UrlInput;