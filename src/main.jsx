import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './provider/ThemeProvider.jsx'
import ThemeWrapper from './component/ThemeWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ThemeWrapper>
          <RouterProvider router={router} />
          <ToastContainer />
        </ThemeWrapper>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)