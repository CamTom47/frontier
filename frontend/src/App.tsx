import { Route, Routes } from 'react-router'
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar/Navbar"


function App() {

  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
      </Routes>      
    </>
  )
}

export default App
