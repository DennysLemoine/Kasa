import React, {lazy} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './styles/normalizer.css'
import './styles/index.css';
import Header from './components/header/header';
import Footer from "./components/footer/footer";

const Home = lazy(() => import('./pages/home/home'));
const Informations = lazy(() => import('./pages/informations/informations'))
const Error = lazy(() => import('./pages/error/error'))

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <div className='container'>
            <Header/>
            <main>
                <Routes>
                    <Route exact path="/"  element={<Home/>}/>
                    <Route exact path="/informations" element={<Informations/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    </BrowserRouter>
);