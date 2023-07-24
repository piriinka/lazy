import { useState } from 'react'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Images } from './components/Images'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { NavBar } from './components/NavBar'
import { Products } from './components/Products'
import { Product } from './components/Product'
import { Faq } from './components/Faq'
import { Login } from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const queryClient = new QueryClient()

function App() {
const [isLoggedIn, setIsLoggedIn] =useState(false)

console.log('app:',isLoggedIn)

  return (
<BrowserRouter> 
<QueryClientProvider client={queryClient}>
  <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/images' element={<Images/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/products/:id' element={<Product/>}/>
  <Route path='/faq' element={isLoggedIn ? <Faq/> : <Login setIsLoggedIn={setIsLoggedIn}/>}/>
  <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
</Routes>
</QueryClientProvider>
</BrowserRouter>
  )
}

export default App
