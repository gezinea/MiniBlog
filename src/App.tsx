
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import About from './pages/About/About'
// import Contact from '../Contact/Contact'


function App() {

  return (
    <>
     <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Router path='/contact' element={<Contact />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div> 
    </>
  )
}

export default App
