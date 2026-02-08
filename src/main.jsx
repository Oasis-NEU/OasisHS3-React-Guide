// File purpose: app entry point and router setup.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Option B: data router version (uncomment to demo).
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// const router = createBrowserRouter([
//   { path: '/', element: <App /> },
// ])

// BrowserRouter enables client-side routing.
// StrictMode helps catch issues during development.
// createRoot mounts the app into the div#root in index.html.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Router wrapper enables <Routes> and <Link>. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// Option B render (uncomment to demo).
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )
