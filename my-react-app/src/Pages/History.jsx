import React from "react";

const History = ({ history }) => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4"> Scan History</h2>

            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                    <th>URL</th>
                    <th>Result</th>
                    <th>Risk</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, index) => (
                        <tr key={index}>
                            <td>{item.url}</td>
                            <td>{item.isPhishing ? "Phishing" : "Safe"}</td>
                            <td>{item.score}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default History;