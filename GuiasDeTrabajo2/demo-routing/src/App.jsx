import React from 'react';
import { Route, Routes } from 'react-router'
import { HomePage } from 'react-router'
import { AboutPage } from 'react-router'
import { LoginPage } from './pages/LoginPage'

export const App = () => {
    return (
        <div>
            <h1>Demo Routing</h1>
            <hr />
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                    <Route index element={<AboutUs/>}/>
                    <Route path='team' element={<TeamPage/>}/>
                <Route/>
                <Route path='login' element={<LoginPage/>}/>
                
            </Routes>
        </div>
    )
}