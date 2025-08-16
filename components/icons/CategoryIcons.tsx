
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        {children}
    </svg>
);

export const PhoneIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </IconWrapper>
);

export const LaptopIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </IconWrapper>
);

export const TVIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19h18m-9-4v4" />
    </IconWrapper>
);

export const FridgeIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3a2 2 0 012-2h10a2 2 0 012 2v18a2 2 0 01-2 2H7a2 2 0 01-2-2V3zM5 10h14M8 6h1m-1 8h1" />
    </IconWrapper>
);

export const FashionIcon: React.FC = () => (
    <IconWrapper>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16v11H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9V5a4 4 0 1 1 8 0v4" />
    </IconWrapper>
);
