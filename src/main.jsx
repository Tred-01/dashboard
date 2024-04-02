import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './sidebar/Sidebar'
// import RoutesPages from '@routes/routes'
import RoutesPages from './routes/routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <div className="flex justify-between">
            <Sidebar />
            <main className="main">
                <RoutesPages />
            </main>
        </div>
    </BrowserRouter>
)
