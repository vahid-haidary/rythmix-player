import {Navigate, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout"


function App() {

  return (
    <>
    <div className="w-bas mx-auto bg-background text-white">
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route path="home" element={<Home/>} />
        <Route index element={<Navigate to="/home"/>} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
