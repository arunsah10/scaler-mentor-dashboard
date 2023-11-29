import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/Notestate";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      {/* // this will enable all the below components to wrap and use Notestate in any levels to multiple levels */}
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="An amazing APP"/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
