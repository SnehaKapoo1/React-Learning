import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(emojipedia){
return(
  <Card
    key= {emojipedia.id}
    imo = {emojipedia.emoji}
    heading = {emojipedia.name}
    description = {emojipedia.def}
  />
)
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
