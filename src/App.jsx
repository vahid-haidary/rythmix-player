import {Navigate, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout/Layout"
import Search from './pages/Search'
import PlayerControls from "./components/PlayerControls"
import Playlist from "./pages/Playlist"
import Downloads from "./pages/Downloads"
import { LoadingProvider } from "./context/LoadingContext"
import MyRythmix from "./pages/MyRythmix"


function App() {

  return (
    <>
    <LoadingProvider>
    <div className="max-w-base mx-auto flex flex-col bg-background text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route path="home" element={<Home/>} />
        <Route path="/playlist" element={<Playlist/>}  />
        <Route path="/downloads" element={<Downloads/>}  />
        <Route path="/search" element={<Search/>}  />
        <Route path="/myrythmix" element={<MyRythmix/>}  />
        <Route index element={<Navigate to="/home"/>} />
        </Route>
        <Route path="/player" element={<PlayerControls/>}/>
      </Routes>
    </div>
    </LoadingProvider>
    </>
  )
}

export default App
