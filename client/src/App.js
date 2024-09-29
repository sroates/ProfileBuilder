
import {Route, Routes} from 'react-router-dom'
import Home from './pages//Home'
import Application from "./pages/Application";
import AppConfirmation from "./pages/AppConfirmation";
import ViewProfile from "./pages/ViewProfile";
import ProfileDisplay from "./pages/ProfileDisplay";

import './App.css';


function App() {
  return (
  <>
    <div className="container"></div>
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/application' element = {<Application />} />
      {/* <Route path = '/home' element = {<Home />} /> */}
      <Route path = '/appConfirmation' element = {<AppConfirmation />} />
      <Route path = '/viewProfile' element = {<ViewProfile/>} />
      <Route path = '/profileDisplay' element = {<ProfileDisplay/>} />
    </Routes>
  </>
  )
}

export default App;
