import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App.js'

let container = document.getElementById('app')
let root = createRoot(container)
root.render(<App />)