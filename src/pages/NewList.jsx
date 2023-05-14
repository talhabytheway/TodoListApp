import { useState } from "react";
import { useDispatch } from "react-redux";
import actionCreators from "../store/actionCreators";
import theme from "../assets/theme";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const NewList = () => {
  let nav = useNavigate();
  const dispatch = useDispatch();
  const [currTheme, setCurrTheme] = useState();

  function addList(event, currTheme) {
    event.preventDefault();
    const name = event.target.elements.text.value;
    if (name == "") {
      alert("List Name Cannot be empty");
      return;
    }
    if (currTheme == undefined) {
      alert("Select Theme");
      return;
    }
    dispatch(actionCreators.addList(name, currTheme));
    event.target.reset();
    setCurrTheme();
    nav("/");
  }

  function handleTheme(themeName) {
    currTheme == theme[themeName]
      ? setCurrTheme()
      : setCurrTheme(theme[themeName]);
  }
  return (
    <div
      className="app"
      style={{
        backgroundImage: `radial-gradient(${
          currTheme?.accent || "#4f4c4b"
        } 1.5px, transparent 1.5px), radial-gradient(${
          currTheme?.accent || "#4f4c4b"
        } 1.5px, transparent 1.5px)`,
        backgroundColor: currTheme?.background || "#232020",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px",
      }}
    >
      <Navbar bg={currTheme?.background} accent={currTheme?.accent} />
      <form onSubmit={() => addList(event, currTheme)}>
        <input type="text" name="text" />
        <h1>NewList</h1>
        <p>{JSON.stringify(currTheme)} current theme</p>
        {Object.keys(theme).map((themeName) => (
          <p
            key={themeName}
            onClick={() => handleTheme(themeName)}
            style={{
              backgroundColor: theme[themeName].background,
              color: theme[themeName].primary,
              borderColor: theme[themeName].accent,
            }}
            className={`cursor-pointer font-black no-select inline-block px-9 py-3 m-4 rounded-full border-8`}
          >
            {themeName}
          </p>
        ))}
        <button type="submit">Add List</button>
      </form>
    </div>
  );
};

export default NewList;
