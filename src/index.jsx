import React, {lazy, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './styles/normalizer.css'
import './styles/index.css';
import Header from './components/header/header';
import Footer from "./components/footer/footer";

const Loading = () => <div>Loading...</div>

const Home = lazy(() => import('./pages/home/home'));
const Informations = lazy(() => import('./pages/informations/informations'))
const Error = lazy(() => import('./pages/error/error'))
const Lodging = lazy(() => import('./pages/lodging/lodging'))

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <div className='container'>
            <Suspense fallback={<Loading/>}>
                <Header/>
                <main>
                    <Routes>
                        <Route exact path="/"  element={<Home/>}/>
                        <Route path="/informations" element={<Informations/>}/>
                        <Route path="/lodging/:id" element={<Lodging/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                </main>
                <Footer/>
            </Suspense>
        </div>
    </BrowserRouter>
);