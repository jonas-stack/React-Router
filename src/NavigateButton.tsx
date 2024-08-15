// src/NavigateButton.tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigateButton: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userId, setUserId] = useState('123');

    return (
        <div>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            <button onClick={() => navigate('/home')}>Go to Home</button>
            <button onClick={() => navigate('/about')}>Go to About</button>
            <button onClick={() => navigate('/contact')}>Go to Contact</button>
            <button onClick={() => navigate(`/user/${userId}`)}>Go to User {userId}</button>
            <button onClick={() => navigate('/products')}>Go to Product List</button>
            <button onClick={() => navigate(-1)} disabled={location.pathname === '/'}>Back</button>
        </div>
    );
};

export default NavigateButton;