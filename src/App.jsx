import "./App.css";
import Home from "./Pages/Home";
import "./styles/Home.css";
import Navbar from "./Components/common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import Profile from "./Pages/Profile";
import PrivacyCoverage from "./Components/common/PrivacyCoverage";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<PrivacyCoverage />}>
              <Route element={<Profile />} path="/profile" />
            </Route>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
