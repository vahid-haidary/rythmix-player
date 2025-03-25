import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Search from './pages/Search';
import PlayerControls from "./components/PlayerControls";
import Playlist from "./pages/Playlist";
import Downloads from "./pages/Downloads";
import { LoadingProvider } from "./context/LoadingContext";
import MyRythmix from "./pages/MyRythmix";
import { AnimatePresence, motion } from "framer-motion";
import PlaylistSongPage from "./pages/PlaylistSongPage";
import CategoryPage from "./pages/CategoryPage";
import Plans from "./pages/Plans";
import SplashScreen from "./components/SplashScreen";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [])
  return (
    <LoadingProvider>
    <div className="max-w-base mx-auto flex flex-col bg-background text-white min-h-screen">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Routes location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/home" />} />
              <Route path="home" element={<Home />} />
              <Route path="playlist" element={<Playlist />} />
              <Route path="downloads" element={<Downloads />} />
              <Route path="search" element={<Search />} />
              <Route path="myrythmix" element={<MyRythmix />} />
              <Route path="category" element={<CategoryPage />} />
              <Route path="category/:categoryId/playlist-songs" element={<PlaylistSongPage />} />
            </Route>
            <Route path="/plans" element={<Plans />} />
          </Routes>

          {/* AnimatePresence برای PlayerControls */}
          <AnimatePresence>
            {location.pathname === "/player" && (
              <motion.div
                className="fixed bottom-0 left-0 right-0 mx-auto w-full bg-black max-w-base z-30"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <PlayerControls />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  </LoadingProvider>
);
}

export default App;