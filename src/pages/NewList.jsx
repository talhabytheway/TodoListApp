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
      <form
        onSubmit={() => addList(event, currTheme)}
        className="flex flex-col justify-center items-center gap-10 py-10 font-mr font-black"
      >
        <input
          type="text"
          name="text"
          style={{
            backgroundColor: currTheme?.background || "#232020",
            borderColor: currTheme?.accent || "#FF7315",
            color: currTheme?.primary || "#F4F4F4",
          }}
          className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] inline-block focus-visible:outline-none rounded-full border-[5px] py-[10px] px-[14px] lg:py-[12px] md:px-[24px] lg:px-[36px] text-[18px] md:text-[24px] lg:text-[30px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(theme).map((themeName) => (
            <p
              key={themeName}
              onClick={() => handleTheme(themeName)}
              style={{
                backgroundColor: theme[themeName].background,
                color: theme[themeName].primary,
                borderColor: theme[themeName].accent,
              }}
              className={`cursor-pointer text-center font-black no-select inline-block px-9 py-3 m-4 rounded-full border-[5px]`}
            >
              {themeName}
            </p>
          ))}
        </div>
        <button
          type="submit"
          style={{
            color: currTheme?.background || "#232020",
            backgroundColor: currTheme?.accent || "#FF7315",
          }}
          className="text-[18px] md:text-[24px] lg:text-[30px] rounded-full px-8 py-4"
        >
          Add List
        </button>
      </form>
    </div>
  );
};

export default NewList;
