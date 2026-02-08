import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import UserList from "./UserList";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/registration">Registration</Link> |{" "}
        <Link to="/users">Users List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/users" element={<UserList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
