import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "./Pages/Dashboard";
import Cards from "./Pages/cards";
import AddNewCourse from "./Pages/AddNewCourse";

import Error from "./Pages/ErrorPage";
import CourseDetails from './Pages/CourseDetails';


import SharedLayout from "./Layout/SharedLayout";


const App = () => {
  return (
  <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element = {<SharedLayout />}>
             <Route index path='/' element={<Dashboard />} />
             <Route path='/courses' element={<Cards />} />
              <Route path='/addcourse' element={<AddNewCourse />} />
              <Route path='/courses/:id' element={<CourseDetails />} />
              <Route path='*' element={<Error />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App