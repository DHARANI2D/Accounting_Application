import {React,useEffect} from 'react';
import Login from './components/login';
import Register from './components/Signin';
import Landing from './components/landinpage';
import GeneralLedger from './components/GeneralLedger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/GeneralLedger' element={<GeneralLedger />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App