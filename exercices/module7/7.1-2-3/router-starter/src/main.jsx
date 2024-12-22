import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  CinemaPage from './components/Pages/CinemaPage'
import  HomePage from './components/Pages/HomePage'
import MovieListPage from './components/Pages/MovieListPage'  
import App from './components/App/App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage/> ,
      },
      {
        path: "cinema",
        element: <CinemaPage/>,
      },
      {
        path: "movies",
        element: <MovieListPage/> ,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
