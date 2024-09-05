import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import Home from "./components/Home.jsx";

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },


])
function App(){
  return(
    <>
      <RouterProvider router = {appRouter}/>
    </>
  )
}
export default App



















// import './App.css'
// import Navbar from './components/shared/Navbar'
// function App(){
//   return(
//     <>
//      <Navbar/>
//     </>
//   )
// }
// export default App








// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Home from './components/home'
// import Login from './components/auth/Login'
// import Signup from './components/auth/Signup'




// const appRouter = createBrowserRouter([
// {
//   path :'/',
//   element:<Home/>
// },
// {
//   path :'/login',
//   element:<Login/>
// },
// {
//   path :'/signup',
//   element:<Signup/>
// },

// ])
// function App() {
//   return (
//     <div>
//       <RouterProvider router = {appRouter}/>
//     </div>
//   )
// }

// export default App
