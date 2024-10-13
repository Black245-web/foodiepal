import React from 'react';
import { BrowserRouter as Router, Route, Routes,HashRouter } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import PostReview from './Main';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PostReview />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
