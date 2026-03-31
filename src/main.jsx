import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ClerkProvider} from '@clerk/react'
import DataProvider from './context/DataProvider.jsx'
import CartProvider from './context/CartProvider.jsx'
import {ToastContainer, Bounce} from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
    <ClerkProvider>
    <App />
    <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
    </ClerkProvider>
    </CartProvider>
    </DataProvider>
  </StrictMode>,
)
