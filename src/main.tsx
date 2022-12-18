import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle/>
      <App />
      <ToastContainer
        position="top-left"
        autoClose={1235}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </BrowserRouter>
  </React.StrictMode>,
)
