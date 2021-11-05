import React from "react";
import "./common-styles/NewNote.css";
import NotesList from "./NotesList";

const NewNote = () => {
  // const []
  const [notes, setNotes] = React.useState<String>([]);
  const [text, setText] = React.useState("");
  function addNewNote() {
    setNotes([...notes, text]);
  }
  console.log(notes);
  return (
    <div>
      <div className="new-note-container">
        <input
          type="text"
          placeholder="Take a note..."
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
          }}
        />
        <button className="add-note" onClick={addNewNote}>
          Add
        </button>
      </div>
      <div className="note-list">
        <NotesList notes={notes} />
      </div>
    </div>
  );
};

export default NewNote;
