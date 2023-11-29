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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NGM3NTc0OTA5Y2Q2OTc0MDcyNDAwIn0sImlhdCI6MTcwMTEwNjI2Mn0.ov8tn0z-cj6JqUkpERufnLHy75Iy-AOsDq4azJBqNGw",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //to do api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NGM3NTc0OTA5Y2Q2OTc0MDcyNDAwIn0sImlhdCI6MTcwMTEwNjI2Mn0.ov8tn0z-cj6JqUkpERufnLHy75Iy-AOsDq4azJBqNGw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log("Adding a new Note");
    const note = {
      _id: "656585be1fa230b45ec6d9b7",
      user: "6564c7574909cd6974072400",
      title: title,
      description: description,
      tag: tag,
      date: "2023-11-28T06:16:30.860Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = (id) => {
    //TODO:API CALL
    console.log("Deleting the node with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a node
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NGM3NTc0OTA5Y2Q2OTc0MDcyNDAwIn0sImlhdCI6MTcwMTEwNjI2Mn0.ov8tn0z-cj6JqUkpERufnLHy75Iy-AOsDq4azJBqNGw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    //Login to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
