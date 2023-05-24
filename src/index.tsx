import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider, createTheme } from '@mui/material'
import './internationalization/i18n'

const theme = createTheme({
    palette: {
        primary: {
            main: '#CCC',
        },
    },
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <>
    <meta name="viewport" content="width=device-width"/>
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
    </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
