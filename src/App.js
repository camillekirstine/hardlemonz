import React from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { Header } from './components/Header'
import { CartPage } from './components/CartPage'
import { CheckoutPage } from './components/CheckoutComponents/CheckoutPage'
import { ConfirmationPage } from './components/ConfirmationPage'
import { Toaster } from 'sonner'
import { DashboardPage } from './components/Dashboard/DashboardPage'
import { Lemonade } from './components/Lemonade'


function App() {
  return (
    
      <Router>
        <div className='container-fluid'>
          <Toaster richColors />
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lemonade' element={<Lemonade />} />
            <Route path='/cart' element={<CartPage />} />
            <Route
              path='/checkout'
              element={
                
                  <CheckoutPage />
                
                
              }
            />
            <Route
              path='/confirmation'
              element={
                
                  <ConfirmationPage />
               
              }
            />
            <Route
              path='/dashboard'
              element={
               
                  <DashboardPage />
               
              }
            />
          </Routes>
          </div>
      </Router>
     
  )
}

export default App
