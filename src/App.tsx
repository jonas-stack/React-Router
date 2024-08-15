// Import necessary modules from React and react-router-dom
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserDetails from './UserDetails';
import NavigateButton from './NavigateButton';
import ProductList from './ProductList';

// Define simple functional components for Home, About, and Contact pages
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

// Define the main App component
const App: React.FC = () => {
    return (
        <div>
            {/* Include the NavigateButton component */}
            <NavigateButton />
            {/* Set up the routes using Routes and Route from react-router-dom */}
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user/:id" element={<UserDetails />} />
                <Route path="/products" element={<ProductList />} />
            </Routes>
        </div>
    );
};

// Export the App component as the default export
export default App;