import "./App.css"
import { Routes, Route, Outlet } from "react-router-dom"

import Header from "./layouts/Header/Header"
import Main from "./layouts/Main/Main"
import AnimeDetails from "./pages/AnimeDetails"

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<Main />} />
          <Route path="/anime-details/:mal_id" element={<AnimeDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
