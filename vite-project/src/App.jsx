
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Task from '../src/pages/Task'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>

    <Route index element = {<Task />}/>
    
    </>
  ))

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App