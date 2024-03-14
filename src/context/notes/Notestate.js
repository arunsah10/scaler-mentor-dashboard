import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  //   const s1 = {
  //     name: "Yash",
  //     clas: "5f",
  //   };
  //   const [state, setState] = useState(s1);
  //   const update = () => {
  //     setTimeout(() => {
  //       setState({
  //         name: "KGF",
  //         class: "chapter 3",
  //       },1000);
  //     });
  //   };
  //   return (
  //     <NoteContext.Provider value={{ state, update }}>
  //       {props.children}
  //     </NoteContext.Provider>
  //   );

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    //to do api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a Student
  const addNote = async (Name, Email, Phone_Number) => {
    //to do api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ Name, Email, Phone_Number }),
    });
    const note=await response.json();
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async(id) => {
    //TODO:API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
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
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a node
  const editNote = async (id, Name, Email, Phone_Number) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ Name, Email, Phone_Number }),
    });
    const json = await response.json();
    console.log(json);
    //Login to edit in client

    let newNotes=JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].Name = Name;
        newNotes[index].Email = Email;
        newNotes[index].Phone_Number = Phone_Number;
        break;
      }

    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
