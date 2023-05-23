import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import PersonsList from "./components/personsList/PersonsList";
import AddUser from "./components/addUser/AddUser";
import React from "react";
import { Login } from './components/Login/Login'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="Login" element={<Login />} />
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<PersonsList />} />
                    <Route path="personsList" element={<PersonsList />} />
                    <Route path="/personsList/:id" element={<Dashboard />} />
                    <Route path="addUser" element={<AddUser />} />
                </Route>

            </Routes>
        </BrowserRouter>

    )
}

export default App
