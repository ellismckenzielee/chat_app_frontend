import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import CreateChat from "./components/CreateChat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import CreateUser from "./components/CreateUser";
import { SocketProvider } from "./contexts/socket.context";
function App() {
  return (
    <UserProvider>
      <SocketProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/messenger" element={<Main />} />
              <Route path="/create" element={<CreateChat />} />
            </Routes>
          </BrowserRouter>
        </div>
      </SocketProvider>
    </UserProvider>
  );
}

export default App;
