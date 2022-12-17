import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle/>
      <App />
      {/* chamar o toastContainer */}
    </BrowserRouter>
  </React.StrictMode>,
)
