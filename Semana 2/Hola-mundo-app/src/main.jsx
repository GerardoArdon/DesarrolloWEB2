import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelloWorldApp } from './HelloWorldApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorldApp/>
  </StrictMode>,
)
