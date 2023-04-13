import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/index.css';
import './styles/App.css';
import Header from './components/header';
import Home from './pages/home';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
);