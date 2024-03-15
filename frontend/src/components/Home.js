import React from "react";
// import markContext from "../context/marks/markContext";
import Marks from "./Marks";
const Home = (props) => {
  const {showAlert}=props;
  return (
    <div>
      <Marks showAlert={showAlert}/>
    </div>
  );
};

export default Home;
