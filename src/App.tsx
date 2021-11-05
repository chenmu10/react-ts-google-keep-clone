import React from "react";
// import "./App.css";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="App">
      <Header />
      <NewNote />
      {/*<NotesList notes={[{title: "",content: ""}]}/>*/}
    </div>
  );
}

export default App;
