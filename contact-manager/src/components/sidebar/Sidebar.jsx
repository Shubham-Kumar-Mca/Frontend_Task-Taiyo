import React, { useEffect, useState } from 'react';
import "./Sidebar.css"
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {
    const getTitleFromLS = JSON.parse(localStorage.getItem("title"))
    const [title, setTitle] = useState(getTitleFromLS || 'Contact Page')


    useEffect(()=>{
        localStorage.setItem("title", JSON.stringify(title))
    },[title])
    return (
        <>
            <div className='navbar__title'>
                <h2>{title}</h2>
            </div>
            <div className='sidebar__container'>
                <div>
                    <div className='sidebar__title'>
                        <NavLink to="/contact" onClick = {()=>setTitle("Contact Page")}>Contact</NavLink>
                        <NavLink to="/dashboard" onClick = {()=>setTitle("Charts And Maps")}>Charts and Maps</NavLink>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Sidebar