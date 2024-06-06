import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './Appwrite/auth'
import { login, logout } from './Store/authSlice'
import { Header, Footer } from './Components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => { setLoading(false) })
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gray-400'>
      <Header />
      <main className='flex-grow bg-black text-white'>
        {/* TODO: <Outlet /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}

export default App
