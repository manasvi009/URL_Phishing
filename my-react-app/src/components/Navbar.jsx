import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-100 text-white px-6 py-4 flex justify-between">
            <h1 className="font-bold text-lg">PhishGuard</h1>
            <ul className="flex gap-4">
                <li>Home</li>
                <li>History</li>
                <li>About</li>
            </ul>
        </nav>
    );
};

export default Navbar;