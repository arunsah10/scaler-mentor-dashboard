import { useState } from "react";
import markContext from "./markContext";
const MarkState = (props) => {
  const host = "http://localhost:5000";
  
  const marksInitial = [];
  const [marks, setMarks] = useState(marksInitial);


  //Get all marks
  const getMarks = async () => {
    //to do api call
    const response = await fetch(`${host}/api/marks/fetchallmarks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });

    const json = await response.json();
    console.log(json);
    setMarks(json);
  };

  //Add a Student
  const addMark = async (Name, Email, Phone_Number,Ideation,Execution,Presentation,Communication,Viva) => {
    //to do api call
    const response = await fetch(`${host}/api/marks/addmark`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ Name, Email, Phone_Number,Ideation,Execution,Presentation,Communication,Viva }),
    });
    const mark=await response.json();
    setMarks(marks.concat(mark));
  };

  //Delete a mark
  const deleteMark = async(id) => {
    //TODO:API CALL
    const response = await fetch(`${host}/api/marks/deletemark/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = response.json();
    console.log(json);
    console.log("Deleting the node with id" + id);
    const newMarks = marks.filter((mark) => {
      return mark._id !== id;
    });
    setMarks(newMarks);
  };

  //Edit a mark
  const editMark = async (id, Name, Email, Phone_Number,Ideation,Execution,Presentation,Communication,Viva) => {
    //API CALL
    const response = await fetch(`${host}/api/marks/updatemark/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ Name, Email, Phone_Number,Ideation,Execution,Presentation,Communication,Viva }),
    });
    const json = await response.json();
    console.log(json);
    //Login to edit in client

    let newMarks=JSON.parse(JSON.stringify(marks));
    for (let index = 0; index < newMarks.length; index++) {
      const element = newMarks[index];
      if (element._id === id) {
        newMarks[index].Name = Name;
        newMarks[index].Email = Email;
        newMarks[index].Phone_Number = Phone_Number;
        newMarks[index].Ideation = Ideation;
        newMarks[index].Execution = Execution;
        newMarks[index].Presentation= Presentation;
        newMarks[index].Communication = Communication;
        newMarks[index].Viva = Viva;
        break;
      }

    }
    setMarks(newMarks);
  };


  return (
    <markContext.Provider value={{ marks, addMark, deleteMark, editMark,getMarks ,}}>
      {props.children}
    </markContext.Provider>
  );
};

export default MarkState;
