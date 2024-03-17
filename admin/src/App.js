import React from 'react'
import { BrowserRouter as Router,Routes,  Route  } from 'react-router-dom'  

//bring home
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'

import Register from './Pages/Register/Register.jsx'
import Header from './component/Header/Header.jsx'





const App = () => {
  return (
    <div>

      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/register' element={ <Register/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
