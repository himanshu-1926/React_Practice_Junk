import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import App1  from './App.jsx'
import App2  from './App.jsx'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(App())
createRoot(document.getElementById('root')).render(App1())
createRoot(document.getElementById('root')).render(App2())