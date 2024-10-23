
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
// import Contact from '../Contact/Contact'


function App() {

  return (
    <> 
     <div className='App'>
      <BrowserRouter>
      <NavBar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Router path='/contact' element={<Contact />} /> */}
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
     </div> 
    </>
  )
}

export default App
