import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    Name: "",
    Email: "",
    Phone_Number: "",
    Ideation: 0,
    Execution: 0,
    Presentation: 0,
    Communication: 0,
    Viva: 0,
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(
      note.Name,
      note.Email,
      note.Phone_Number,
      note.Ideation,
      note.Execution,
      note.Presentation,
      note.Communication,
      note.Viva
    );
    setNote({
      Name: "",
      Email: "",
      Phone_Number: "",
      Ideation: 0,
      Execution: 0,
      Presentation: 0,
      Communication: 0,
      Viva: 0,
    });
    props.showAlert("Added Sucessfully", "success");
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
              minLength={5}
              required
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
              minLength={5}
              required
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
              minLength={5}
              required
            />
            <div className="mb-3">
              <label htmlFor="Ideation" className="form-label">
                Ideation Mark
              </label>
              <input
                type="number"
                className="form-control"
                name="Ideation"
                id="Ideation"
                onChange={onChange}
                value={note.Ideation}
                min={0} // Minimum value allowed (optional)
                max={100} // Maximum value allowed (optional)
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Execution" className="form-label">
                Execution Mark
              </label>
              <input
                type="number"
                className="form-control"
                name="Execution"
                id="Execution"
                onChange={onChange}
                value={note.Execution}
                min={0}
                max={100}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Presentation" className="form-label">
                Presentation Mark
              </label>
              <input
                type="number"
                className="form-control"
                name="Presentation"
                id="Presentation"
                onChange={onChange}
                value={note.Presentation}
                min={0}
                max={100}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Communication" className="form-label">
                Communication Mark
              </label>
              <input
                type="number"
                className="form-control"
                name="Communication"
                id="Communication"
                onChange={onChange}
                value={note.Communication}
                min={0}
                max={100}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Viva" className="form-label">
                Viva Mark
              </label>
              <input
                type="number"
                className="form-control"
                name="Viva"
                id="Viva"
                onChange={onChange}
                value={note.Viva}
                min={0}
                max={100}
                required
              />
            </div>

          </div>
          <button
            disabled={note.Name.length < 3 || note.Email.length < 5}
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
