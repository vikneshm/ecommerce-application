import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App.js'
import {Provider} from 'react-redux'
import store from './components/redux/store'

let container = document.getElementById('app')
let root = createRoot(container)
root.render(
<Provider store={store}>
<App />
</Provider>
)