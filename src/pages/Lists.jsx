import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actionCreators from "../store/actionCreators";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/edit.svg";
import theme from "../assets/theme";

const Lists = () => {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  function findThemeKey(themeObj) {
    const foundTheme = Object.entries(theme).find(
      ([key, value]) => JSON.stringify(value) === JSON.stringify(themeObj)
    );

    if (foundTheme) {
      return foundTheme[0].split(" ")[0];
    }

    return null;
  }
  function removeList(listId) {
    dispatch(actionCreators.removeList(listId));
  }
  return (
    <div className="app font-bold pb-10">
      <Navbar />
      <h1 className="lg:text-[96px] md:text-[69px] text-[48px] text-center pb-10">
        Todo Lists<span className="text-[#FF7315]">.</span>
      </h1>
      <ul className="font-mr max-w-[85%] md:max-w-[80%] lg:max-w-[70%] mx-auto font-black text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px]">
        {Object.keys(lists).map((key) => (
          <li
            key={key}
            id={key}
            className="flex flex-row justify-between items-center lg:[&>div>button]:opacity-0 [&>div>button]:hover:opacity-100 pb-4"
          >
            <h3
              className={`truncate w-fit max-w-[70%] sm:max-w-[80%] md:max-w-[80%] lg:max-w-[70%] inline-block relative bar z-[100] ${findThemeKey(
                lists[key].theme
              )}`}
            >
              <Link to={`/list/${key}`}>{lists[key].name}</Link>
            </h3>
            <div className="flex flex-row gap-[16px] md:gap-[24px] lg:gap-[36px]">
              <button>
                <Link to={`/list/edit/${key}`}>
                  <img
                    src={editIcon}
                    alt="delete"
                    className="w-[24px] md:w-[36px] lg:w-[48px]"
                  />
                </Link>
              </button>
              <button onClick={() => removeList(key)}>
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="w-[24px] md:w-[36px] lg:w-[48px]"
                />
              </button>
            </div>
          </li>
        ))}
        <div className="w-fit inline-block relative bar z-[100] bar Orange">
          <Link to={"list/new"}>+ add new</Link>
        </div>
      </ul>
    </div>
  );
};

export default Lists;
