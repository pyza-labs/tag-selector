import React from "react";
import "./App.css";
import TagSelect from "../components/tagSelect/tagSelect";
function App() {
  const tagString = [
    "Hare",
    "Krishna",
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eight",
    "Ninth",
    "Tenth"
  ];
  return (
    <div className="App">
      <TagSelect
        renderItem={(element, index, isSelected, clickHandler) => {
          return (
            <div
              onClick={clickHandler}
              style={{ color: isSelected ? "blue" : "red" }}
            >
              {element}
            </div>
          );
        }}
        // select={index => console.log(tagString[index])}
        items={tagString}
      />
    </div>
  );
}
export default App;
