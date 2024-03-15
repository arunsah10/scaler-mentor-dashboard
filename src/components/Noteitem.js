import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const calculateTotalMarks = () => {
    const ideation = parseFloat(note.Ideation); // Convert Ideation to a number
    const execution = parseFloat(note.Execution); // Convert Execution to a number
    const presentation = parseFloat(note.Presentation); // Convert Presentation to a number
    const communication = parseFloat(note.Communication); // Convert Communication to a number
    const viva = parseFloat(note.Viva); // Convert Viva to a number

    // Calculate total marks
    const total = ideation + execution + presentation + communication + viva;
    return total;
  };
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-Name">
            Name:<b>{note.Name}</b>
          </h5>
          <p className="card-text">
            Email:
            <i>
              <u>{note.Email}</u>
            </i>
          </p>
          <p className="card-text">Phone_Number:{note.Phone_Number}</p>
          <p className="card-text">Ideation: {note.Ideation}/10</p>
          <p className="card-text">Execution: {note.Execution}/10</p>
          <p className="card-text">Presentation: {note.Presentation}/10</p>
          <p className="card-text">Communication: {note.Communication}/10</p>
          <p className="card-text">Viva: {note.Viva}/10</p>
          <h5 className="card-text">Total: {calculateTotalMarks()}/50</h5>
          <i
            className="fa-solid fa-trash mx-2"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Sucessfully", "success");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2 "
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
