import React from "react";
import "./NewNote.css";

const NewNote = () => {
  function addNewNote() {
    // @ts-ignore
    const noteText = document.querySelector("input").value;
    const div = document.createElement("div");
    div.innerText = noteText;
    const noteList = document.querySelector(".note-list");
    // @ts-ignore
    noteList.appendChild(div);
  }

  return (
    <div>
      <div className="new-note-container">
        <input type="text" placeholder="Take a note..." />
        <button className="add-note" onClick={addNewNote}>
          Add
        </button>
      </div>
      <div className="note-list"></div>
    </div>
  );
};

export default NewNote;
