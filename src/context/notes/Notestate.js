import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
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

  const notesInitial = [
    {
      _id: "6565697cb199adac6bd44980",
      user: "6564c7574909cd6974072400",
      title: "rich dad_poor dad",
      description: "A financial book",
      tag: "books",
      date: "2023-11-28T04:15:56.469Z",
      __v: 0,
    },
    {
      _id: "656569f6b199adac6bd44982",
      user: "6564c7574909cd6974072400",
      title: "Man searches for meaning",
      description: "A book on learnings and life",
      tag: "learn and grow",
      date: "2023-11-28T04:17:58.245Z",
      __v: 0,
    },
    {
      _id: "656585be1fa230b45ec6d9b7",
      user: "6564c7574909cd6974072400",
      title: "Man's meaning updated",
      description: "A book on learnings and life",
      tag: "learn and grow",
      date: "2023-11-28T06:16:30.860Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
