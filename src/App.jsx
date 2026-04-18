import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Clientes from './pages/Clientes'
import Proveedor from './pages/Proveedor'
import Usuarios from './pages/Usuarios'
import Logout from './pages/Logout'

function App(){

return(

<BrowserRouter>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
<div className="container">

<a className="navbar-brand fw-bold">
Panel Administrativo
</a>

<div className="navbar-nav ms-auto">

<NavLink className="nav-link text-white" to="/">
Clientes
</NavLink>

<NavLink className="nav-link text-white" to="/proveedor">
Proveedor
</NavLink>

<NavLink className="nav-link text-white" to="/usuarios">
Usuarios
</NavLink>

<NavLink className="nav-link text-white" to="/logout">
Logout
</NavLink>

</div>

</div>
</nav>

<div className="container mt-5">
<div className="card shadow p-4">
<Routes>
<Route path="/" element={<Clientes/>}/>
<Route path="/proveedor" element={<Proveedor/>}/>
<Route path="/usuarios" element={<Usuarios/>}/>
<Route path="/logout" element={<Logout/>}/>
</Routes>
</div>
</div>

</BrowserRouter>

)

}

export default App
