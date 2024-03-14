import React, { useContext, useEffect, useRef,useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate=useNavigate();
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({id:"", eName: "", eEmail: "", ePhone_Number: "" });

  const updateNote = (currentNote) => {
    ref.current.click();
    // to populated the initial entries in the modal
    setNote({id:currentNote._id,eName:currentNote.Name,eEmail:currentNote.Email,ePhone_Number:currentNote.Phone_Number});
  };

  const handleClick = (e) => {
    editNote(note.id,note.eName,note.eEmail,note.ePhone_Number);
    refClose.current.click();
    props.showAlert("Updated Sucessfully","success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-Name fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eName"
                    name="eName"
                    value={note.eName}
                    aria-describedby="Name"
                    onChange={onChange}
                    minLength={5 } required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={note.eEmail}
                    name="eEmail"
                    id="eEmail"
                    onChange={onChange}
                    minLength={8 } required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Phone_Number" className="form-label">
                    Phone_Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={note.ePhone_Number}
                    name="ePhone_Number"
                    id="ePhone_Number"
                    onChange={onChange}
                    minLength={5 } required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.eName.length<5 || note.eEmail.length<8} onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Students</h2>
        <div className="container">
        {notes.length===0 && 'No Notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
