import {Navigate, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout"
import Search from './pages/Search'
import PlayerControls from "./components/PlayerControls"


function App() {

  return (
    <>
    <div className="max-w-base mx-auto flex flex-col bg-background text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route path="home" element={<Home/>} />
        <Route path="/search" element={<Search/>}  />
        <Route index element={<Navigate to="/home"/>} />
        </Route>
        <Route path="/player" element={<PlayerControls/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
