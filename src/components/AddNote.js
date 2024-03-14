import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ Name: "", Email: "", Phone_Number: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.Name, note.Email, note.Phone_Number);
    setNote({ Name: "", Email: "", Phone_Number: "" });
    props.showAlert("Added Sucessfully","success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="conatiner my-3">
        <h2>Add a Student</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              name="Name"
              aria-describedby="Name"
              onChange={onChange}
              value={note.Name}
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
              name="Email"
              id="Email"
              onChange={onChange}
              value={note.Email}
              minLength={5 } required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Phone_Number" className="form-label">
              Phone_Number
            </label>
            <input
              type="text"
              className="form-control"
              name="Phone_Number"
              id="Phone_Number"
              onChange={onChange}
              value={note.Phone_Number}
              minLength={5 } required
            />
          </div>
         
          <button disabled={note.Name.length<5 || note.Email.length<8}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            add student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
