import React, { useContext } from "react";
import markContext from "../context/marks/markContext";
const Markitem = (props) => {
  const context = useContext(markContext);
  const { deleteMark } = context;
  const { mark, updateMark } = props;

  const calculateTotalMarks = () => {
    const ideation = parseFloat(mark.Ideation); // Convert Ideation to a number
    const execution = parseFloat(mark.Execution); // Convert Execution to a number
    const presentation = parseFloat(mark.Presentation); // Convert Presentation to a number
    const communication = parseFloat(mark.Communication); // Convert Communication to a number
    const viva = parseFloat(mark.Viva); // Convert Viva to a number

    // Calculate total marks
    const total = ideation + execution + presentation + communication + viva;
    return total;
  };
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-Name">
            Name:<b>{mark.Name}</b>
          </h5>
          <p className="card-text">
            Email:
            <i>
              <u>{mark.Email}</u>
            </i>
          </p>
          <p className="card-text">Phone_Number:{mark.Phone_Number}</p>
          <p className="card-text">Ideation: {mark.Ideation}/10</p>
          <p className="card-text">Execution: {mark.Execution}/10</p>
          <p className="card-text">Presentation: {mark.Presentation}/10</p>
          <p className="card-text">Communication: {mark.Communication}/10</p>
          <p className="card-text">Viva: {mark.Viva}/10</p>
          <h5 className="card-text">Total: {calculateTotalMarks()}/50</h5>
          <i
            className="fa-solid fa-trash mx-2"
            onClick={() => {
              deleteMark(mark._id);
              props.showAlert("Deleted Sucessfully", "success");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2 "
            onClick={() => {
              updateMark(mark);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Markitem;
