import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
