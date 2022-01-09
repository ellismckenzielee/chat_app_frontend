import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import CreateChat from "./components/CreateChat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
function App() {
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/messenger" element={<Main />} />
            <Route path="/create" element={<CreateChat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
