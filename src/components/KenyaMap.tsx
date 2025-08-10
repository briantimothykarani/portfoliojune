import React from "react";

const KenyaMap: React.FC = () => {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <svg
                viewBox="0 0 500 600"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
            >
                <path
                    d="M150,100 L200,80 L250,100 L260,180 L300,250 L280,300 L250,350 L230,400 L200,380 L170,330 L150,280 L130,200 Z"
                    fill="#4ade80"
                    stroke="#065f46"
                    strokeWidth="4"
                />
                {/* Marker for Nairobi */}
                <circle cx="240" cy="270" r="8" fill="red" className="animate-ping" />
                <text x="250" y="270" fontSize="14" fill="black">Nairobi</text>
            </svg>
        </div>
    );
};

export default KenyaMap;
