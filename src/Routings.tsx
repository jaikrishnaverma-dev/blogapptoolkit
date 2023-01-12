import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Pages/admin/Admin'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Nav from './Pages/Nav'
import { SideBar } from './Pages/SideBar'

const Routings = () => {
    return (
        <>
            <Nav />
            {/* <Login/> */}

            <div className="col-12 d-flex  px-sm-2 flex-wrap">
                
                <div className="col-12 col-sm-3 p-3" >
                    <SideBar />
                </div>
                <div className="col-12 col-sm-9 border scroller p-3">
               
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/admin' element={<Admin />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Routings