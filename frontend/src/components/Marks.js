import React, { useContext, useEffect, useRef, useState } from "react";
import markContext from "../context/marks/markContext";
import Markitem from "./Markitem";
import AddMark from "./AddMark";
import { useNavigate } from "react-router-dom";
const Marks = (props) => {
  const context = useContext(markContext);
  const navigate = useNavigate();
  const { marks, getMarks, editMark } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getMarks();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [mark, setMark] = useState({
    id: "",
    eName: "",
    eEmail: "",
    ePhone_Number: "",
    eIdeation: 0, // Add eIdeation
    eExecution: 0, // Add eExecution
    ePresentation: 0, // Add ePresentation
    eCommunication: 0, // Add eCommunication
    eViva: 0, // Add eViva
  });

  const updateMark = (currentMark) => {
    ref.current.click();
    // to populated the initial entries in the modal
    setMark({
      id: currentMark._id,
      eName: currentMark.Name,
      eEmail: currentMark.Email,
      ePhone_Number: currentMark.Phone_Number,
    });
    setMark({
      id: currentMark._id,
      eName: currentMark.Name,
      eEmail: currentMark.Email,
      ePhone_Number: currentMark.Phone_Number,
      eIdeation: currentMark.Ideation, // Initialize with empty value
      eExecution: currentMark.Execution, // Initialize with empty value
      ePresentation: currentMark.Presentation, // Initialize with empty value
      eCommunication: currentMark.Communication, // Initialize with empty value
      eViva: currentMark.Viva, // Initialize with empty value
    });
  };

  const handleClick = (e) => {
    editMark(mark.id, mark.eName, mark.eEmail, mark.ePhone_Number,mark.eIdeation,mark.eExecution,mark.ePresentation,mark.eExecution,mark.eViva);
    refClose.current.click();
    props.showAlert("Updated Sucessfully", "success");
  };

  const onChange = (e) => {
    setMark({ ...mark, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddMark showAlert={props.showAlert} />
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
                Edit Mark
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
                    value={mark.eName}
                    aria-describedby="Name"
                    onChange={onChange}
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
                    value={mark.eEmail}
                    name="eEmail"
                    id="eEmail"
                    onChange={onChange}
                    minLength={8}
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
                    value={mark.ePhone_Number}
                    name="ePhone_Number"
                    id="ePhone_Number"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="eIdeation" className="form-label">
                    Ideation Mark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={mark.eIdeation}
                    name="eIdeation"
                    id="eIdeation"
                    onChange={onChange}
                    minLength={1} // Adjust the minimum length as needed
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="eExecution" className="form-label">
                    Execution Mark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={mark.eExecution}
                    name="eExecution"
                    id="eExecution"
                    onChange={onChange}
                    minLength={1}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="ePresentation" className="form-label">
                    Presentation Mark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={mark.ePresentation}
                    name="ePresentation"
                    id="ePresentation"
                    onChange={onChange}
                    minLength={1}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="eCommunication" className="form-label">
                    Communication Mark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={mark.eCommunication}
                    name="eCommunication"
                    id="eCommunication"
                    onChange={onChange}
                    minLength={1}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="eViva" className="form-label">
                    Viva Mark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={mark.eViva}
                    name="eViva"
                    id="eViva"
                    onChange={onChange}
                    minLength={1}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={mark.eName.length < 5 || mark.eEmail.length < 8}
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update mark
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Students</h2>
        <div className="container">
          {marks.length === 0 && "No Students Addded"}
        </div>
        {marks.map((mark) => {
          return (
            <Markitem
              key={mark._id}
              updateMark={updateMark}
              mark={mark}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </>
  );
};

export default Marks;
