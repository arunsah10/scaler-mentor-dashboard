import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import MarkState from "./context/marks/Markstate";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      {/* // this will enable all the below components to wrap and use Markstate in any levels to multiple levels */}
      <MarkState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />}></Route>

              <Route path="/about" element={<About />}></Route>
              <Route
                path="/login"
                element={<Login showAlert={showAlert} />}
              ></Route>
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </MarkState>
    </>
  );
}

export default App;
