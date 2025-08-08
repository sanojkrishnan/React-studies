import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{ App, DropDown, Facts,JsonFetchingEg } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DropDown />
    <Facts />
    <JsonFetchingEg />
  </StrictMode>,
)
