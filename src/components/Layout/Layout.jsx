import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footor/Footer'

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}