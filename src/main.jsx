import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { APIKEY } from './context/context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <APIKEY.Provider value='c52f4802b8f38618a7fb179f65dfcb53'>
        <App />
    </APIKEY.Provider>

)
