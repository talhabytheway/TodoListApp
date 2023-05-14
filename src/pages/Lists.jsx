import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actionCreators from "../store/actionCreators";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import deleteIcon from "../assets/delete.svg";
const Lists = () => {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  function removeList(listId) {
    dispatch(actionCreators.removeList(listId));
  }
  return (
    <div className="app font-bold">
      <Navbar />
      <h1 className="lg:text-[96px] md:text-[69px] text-[48px] text-center">
        Todo Lists<span className="text-[#FF7315]">.</span>
      </h1>
      <ul className="font-mr max-w-[80%] lg:max-w-[60%] mx-auto">
        {Object.keys(lists).map((key) => (
          <li key={key} id={key}>
            <Link to={`/list/${key}`}>{lists[key].name}</Link>
            <button onClick={() => removeList(key)}>
              {" "}
              <img src={deleteIcon} alt="delete" />{" "}
            </button>
          </li>
        ))}
        <Link to={"list/new"}>add new</Link>
      </ul>
    </div>
  );
};

export default Lists;
