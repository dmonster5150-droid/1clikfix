import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Book from './pages/Book'
import Jobs from './pages/Jobs'
import Calendar from './pages/Calendar'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProviderLogin from './pages/ProviderLogin'
import ProviderDashboard from './pages/ProviderDashboard'
import './styles/tailwind.css'
import { AuthProvider } from './authProvider'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Home/>} />
            <Route path='book' element={<Book/>} />
            <Route path='jobs' element={<Jobs/>} />
            <Route path='calendar' element={<Calendar/>} />
            <Route path='login' element={<Login/>} />
            <Route path='profile' element={<Profile/>} />
            <Route path='provider-login' element={<ProviderLogin/>} />
            <Route path='provider' element={<ProviderDashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
