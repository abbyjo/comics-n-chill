import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Submit from './pages/Submit.jsx'
import Results from './pages/Results'
import Admin from './pages/Admin.jsx'
import Error from './pages/Error.jsx'

// React router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/submit',
        element: <Submit />
      }, {
        path: '/results',
        element: <Results />
      }, {
        path: '/admin',
        element: <Admin />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)