import React, { useState } from "react";
import Note, { NoteInt } from "./Note";

interface NotesListInt {
  notes: NoteInt[];
}

const NotesList = ({ notes }) => {
  return (
    <div>
      {notes &&
        notes.map((note) => {
          return <Note title={note} />;
        })}
    </div>
  );
};

export default NotesList;
