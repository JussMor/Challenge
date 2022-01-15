
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/Home/components/Home'
import NotFoundPage from '../components/layout/NotFound/NotFound'

export default function MainRouter() {
    return (
        <>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          </BrowserRouter>  
        </>
    )
}
