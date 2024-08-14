// Import necessary modules from React and react-router-dom
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Define the NavigateButton component
const NavigateButton: React.FC = () => {
    // Initialize navigate and location hooks
    const navigate = useNavigate();
    const location = useLocation();

    // Initialize userId state with a default value
    const [userId, setUserId] = useState('123');

    return (
        <div>
            {/* Input field to update the userId state */}
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            {/* Buttons to navigate to different routes */}
            <button onClick={() => navigate('/home')}>Go to Home</button>
            <button onClick={() => navigate('/about')}>Go to About</button>
            <button onClick={() => navigate('/contact')}>Go to Contact</button>
            <button onClick={() => navigate(`/user/${userId}`)}>Go to User {userId}</button>
            {/* Back button, disabled when on the root path */}
            <button onClick={() => navigate(-1)} disabled={location.pathname === '/'}>Back</button>
        </div>
    );
};

// Export the NavigateButton component as the default export
export default NavigateButton;