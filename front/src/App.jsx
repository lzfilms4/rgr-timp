import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import PersonsList from "./components/personsList/PersonsList";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<PersonsList />} />
                    <Route path="personsList" element={<PersonsList />} />
                    <Route path="/personsList/:id" element={<Dashboard />} />
                </Route>

            </Routes>
        </BrowserRouter>

    )
}

export default App
