import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage.jsx'
import ChatPage from './pages/ChatPage.jsx'

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/chat' element={<ChatPage />} />
            </Routes>
        </React.Fragment>
    )
}

export default App
