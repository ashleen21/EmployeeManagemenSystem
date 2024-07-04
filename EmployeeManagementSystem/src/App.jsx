import './App.css'
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/auth/adminlogin' element={<Login />}> </Route>
      <Route path='/home' element={<Home />}> </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App