import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/Notestate";
import Alert from "./components/Alert";
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
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
