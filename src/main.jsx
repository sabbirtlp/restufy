import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Recipe from './Components/Recipe/Recipe.jsx'
import Contact from './Components/Contact/Contact.jsx'
import App from './App.jsx'
import Recipes from './Components/Recipes/Recipes.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import RecipeDetails from './Components/RecipeDetails/RecipeDetails.jsx'





const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/',
          element: <Home />,

        },
        { path: '/about', element: <About /> },
        { path: '/recipe', element: <Recipe /> },
        {
          path: '/recipes',
          element: <Recipes />,
          
        },
        { path: '/contact', element: <Contact /> },
        {
          path:'/recipe/:recipeId',
          loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.recipeId}`),
          element:<RecipeDetails></RecipeDetails>
        },
      ],
    },
  ],
);


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
