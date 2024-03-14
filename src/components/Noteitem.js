import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-Name"><b>{note.Name}</b></h5>
          <p className="card-text">{note.Email}</p>
          <p className="card-text"><i><u>{note.Phone_Number}</u></i></p>
          <i
            className="fa-solid fa-trash mx-2"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Sucessfully","success");
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
