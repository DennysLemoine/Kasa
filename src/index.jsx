import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/normalizer.css'
import './styles/index.css';
import './styles/App.css';
import Header from './components/header/header';
import Home from "./pages/home/home";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
            </main>
        </Router>
    </React.StrictMode>,
);