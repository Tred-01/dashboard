import {Routes, Route} from 'react-router-dom'
import Home from '@modules/Home'
import Descr from '@modules/Descr'
export default function RoutesPages () {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/customers" element={<Descr />}></Route>
        </Routes>
    )
}