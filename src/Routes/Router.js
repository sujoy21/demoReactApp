import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieCards from "../Components/MovieCards";
import HomePage from '../Components/HomePage';

function Routermovie() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movie" element={<MovieCards />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routermovie