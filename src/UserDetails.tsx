// Import necessary modules from React and react-router-dom
import React from 'react';
import { useParams } from 'react-router-dom';

// Define the UserDetails component
const UserDetails: React.FC = () => {
    // Get the user ID from the URL parameters
    const { id } = useParams<{ id: string }>();

    // Log the user ID to the console
    console.log(id);

    // Display the user ID in a h2 element
    return <h2>User ID: {id}</h2>;
};

// Export the UserDetails component as the default export
export default UserDetails;