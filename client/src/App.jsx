import react, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./comps/Layout";
import Profile from "./comps/Profile";
import Login from "./comps/Login";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

{
  /* <Route element={<Layout />}>
          <Route element={<Root />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/:id" element={<Post />} /> 
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} /> */
}
