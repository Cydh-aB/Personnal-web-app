import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Header from './components/layout/Header'
import ContactPage from './page/ContactPage'
import AboutPage from './page/AboutPage'
import WorkPage from './page/WorkPage'
import Error from './page/error'
import Band from './components/layout/Band'

function App() {
  return (
    <>
      {/* Initialisation du router */}
      <BrowserRouter>
        <Header />
        <div className='xl:flex 2xl:ml-40'>
          <Band />
          <Routes>
            {/**Route Home*/}
            <Route path='/' element={<Home />}/>
            <Route path='/Work' element={<WorkPage />}/>
            <Route path='/About' element={<AboutPage />}/>
            <Route path='/Contact' element={<ContactPage />}/>
            <Route path='*' element={<Error />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
