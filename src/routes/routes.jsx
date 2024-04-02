import {Routes, Route} from 'react-router-dom'
import Soon from '@modules/soon/Soon'
import Customers from '@modules/customers/Customers'
export default function RoutesPages () {
    return (
        <Routes>
            <Route path='/dashboard' element={<Soon />}></Route>
            <Route path="/product" element={<Soon />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/income" element={<Soon />}></Route>
            <Route path="/promote" element={<Soon />}></Route>
            <Route path="/help" element={<Soon />}></Route>
        </Routes>
    )
}