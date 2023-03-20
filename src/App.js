import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import DisplayPage from './components/LoginPage/DisplayPage/DisplayPage';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";


const route =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/index" element={<DisplayPage/>}/>
    </Route>
  )
);

function App() {
  return (<div className='main-page'>
    <RouterProvider router={route}/>
  </div>);
}

export default App;
