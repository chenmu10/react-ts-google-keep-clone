import React from "react";

export interface NoteInt {
  // named export
  title: string;
  content: string;
}
const Note = (props: NoteInt) => {
  return (
    <div>
      <p className="title">{props.title}</p>
      <p className="content">{props.content}</p>
      <div className="note-actions">
        <span>Remind Me</span>
        <span>Color</span>
        <span>Delete</span>
      </div>
    </div>
  );
};

export default Note; // default export
