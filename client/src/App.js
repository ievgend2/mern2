import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './constants/routes.js'
import { useAuth } from './hooks/auth.hook.js'
import { AuthContext } from './context/AuthContext.js'
import { Navigation } from './components/Navigation/index.js'
import Carousel from './components/Carousel/index.js'
import Footer from './components/Footer/index.js'
import 'materialize-css'
import "./app.css"



function App() {
  const { token, login, logout, userId } = useAuth()
  const isAuntheticated = !!token
  const routes = useRoutes(isAuntheticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuntheticated
    }}>
      <Router>
        {/* {isAuntheticated && <Navigation />} */}
        <Navigation />
        <Carousel />
        <div className="main-content">
          {routes}
        </div>
        <Footer />
      </Router>
    </AuthContext.Provider>

  );
}

export default App;
