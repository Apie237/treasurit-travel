import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import DiasporaProtection from './pages/DiasporaProtection'
import B2BB2CC2C from './pages/B2BB2CC2C'
import EnterpriseB2C from './pages/EnterpriseB2C'
import B2G from './pages/B2G'
import AgencyEscrow from './pages/AgencyEscrow'
import ImportExport from './pages/ImportExport'
import Escrow from './pages/Escrow'
import Login from './pages/Login'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='mx-6'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path="/escrow" element={<Escrow />} />
          <Route path="/escrow/diaspora-protection" element={<DiasporaProtection />} />
          <Route path="/escrow/b2b-b2c-c2c" element={<B2BB2CC2C />} />
          <Route path="/escrow/enterprise-b2c" element={<EnterpriseB2C />} />
          <Route path="/escrow/b2g" element={<B2G />} />
          <Route path="/escrow/agency" element={<AgencyEscrow />} />
          <Route path="/escrow/import-export" element={<ImportExport />} />
        </Routes>
        <WhatsAppButton />
      </div>
      <Footer />
    </div>
  )
}

export default App