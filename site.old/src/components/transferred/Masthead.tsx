import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const Masthead = () => {
    return (
        <section className="relative flex justify-left items-center">
            <div className="overflow-hidden max-h-screen">
                <img src="/paul-1.jpg" alt="paul-1" />
            </div>
            <div className="absolute z-10 text-left px-8 drop-shadow-lg shadow-black">
                <div className="text-black uppercase text-left text-sm ml-5">Welcome to</div>
                <Logo />
                <div className="text-4xl text-left font-mplus font-medium ml-5 text-black">
                    Paul Gradies <span className="text-orange-500">Personal</span> Website
                </div>
            </div>
        </section>
    );
};

const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(25, 25)">
          <rect x="-10" y="-10" width="40" height="40" rx="10" ry="10" fill="#1A202C">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2s" repeatCount="indefinite" />
            <text x="10" y="22" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#FFF">P</text>
          </rect>
          <rect x="30" y="20" width="40" height="40" rx="10" ry="10" fill="#FFF">
            <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="2s" repeatCount="indefinite" />
            <text x="48" y="42" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#1A202C">G</text>
          </rect>
        </g>
      </svg>
    );
};
