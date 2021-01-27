import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import { useRoutes } from './constants/routes.js'

function App() {
  const routes = useRoutes(false)
  return (
    <Router>
      <div className="container">
        {routes}
      </div>
    </Router>
  );
}

export default App;
