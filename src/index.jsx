import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/normalizer.css'
import './styles/index.css';
import './styles/App.css';
import Header from './components/header/header';
import Home from "./pages/home/home";
import Informations from "./pages/informations/informations";
import Footer from "./components/footer/footer";
import Error from "./pages/error/error";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <div className='container'>
                <Header/>
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/informations" element={<Informations/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    </React.StrictMode>,
);