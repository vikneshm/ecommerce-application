import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register/Register.js'
import Home from './Home/Home.js'
import Login from './Login/Login.js'
import Content from './Content/Content.js'

const App = () => {
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='/about' element={<>Hi</>} />
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/signIn' element={<Login />}></Route>
                    <Route path='/content' element={<Content />}></Route>
                </Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;