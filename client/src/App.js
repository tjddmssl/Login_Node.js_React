import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Layout from "./components/Layout";
import { getLocalStorage } from "./components/localStorage";
function App() {
  const name = getLocalStorage("name");
  console.log(name);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {name ? <Logout /> : <Login />}
    </>
  );
}

export default App;
