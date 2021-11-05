import React, { useState } from "react";
import Note from "./Note";

interface NotesListInt {
  notes: [];
}

const NotesList = (props: NotesListInt) => {
  const [notes, setNotes] = useState([]);
  return (
    <div>
      {props.notes.map((note) => {
        // <Note title={note.title} content={note.content} />
      })}
    </div>
  );
};

export default NotesList;
