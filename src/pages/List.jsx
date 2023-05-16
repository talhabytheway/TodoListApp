import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionCreators from "../store/actionCreators";
import Navbar from "../components/Navbar";
import { useState } from "react";

const List = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [editMode, setEditMode] = useState(false);
  const list = useSelector((state) => state.lists[listId]);
  const [{ primary, background, accent }, setTheme] = useState(list.theme);

  useEffect(() => {
    if (list == undefined) navigate("/404");
  }, []);

  function addTask(event) {
    event.preventDefault();
    if (task == "") return;
    if (!editMode) {
      dispatch(actionCreators.addTask(listId, task));
    } else {
      dispatch(actionCreators.editTask(listId, editMode, task));
    }
    setTask("");
    setEditMode(false);
  }

  function removeTask(listId, key) {
    const taskId = key;
    dispatch(actionCreators.removeTask(listId, taskId));
  }
  function markCompleted(listId, key) {
    const taskId = key;
    dispatch(actionCreators.markCompleted(listId, taskId));
  }
  function editTask(key) {
    setEditMode(key);
    setTask(list.tasks[key].name);
  }

  return (
    <div
      className="app font-mr font-black"
      style={{
        backgroundImage: `radial-gradient(${
          accent || "#4f4c4b"
        } 1.5px, transparent 1.5px), radial-gradient(${
          accent || "#4f4c4b"
        } 1.5px, transparent 1.5px)`,
        backgroundColor: background || "#232020",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px",
        color: primary,
      }}
    >
      <Navbar bg={background} accent={accent} />
      <h1 className="break-words hyphens-auto font-st lg:text-[96px] md:text-[69px] text-[48px] text-center pb-6 lg:pb-10 max-w-[80vw] leading-[120%] mx-auto">
        {list.name}
        <span style={{ color: accent }}>.</span>
      </h1>
      <form
        onSubmit={addTask}
        className="flex gap-[20px] lg:gap-[40px] flex-col md:flex-row justify-center flex-wrap pb-10"
      >
        <input
          type="text"
          name="text"
          className="max-w-[80vw] mx-[10%] md:mx-0 inline-block focus-visible:outline-none rounded-full border-[5px] py-[10px] px-[14px] lg:py-[12px] md:px-[24px] lg:px-[36px] text-[18px] md:text-[24px] lg:text-[30px]"
          style={{
            backgroundColor: background || "#2320",
            borderColor: accent || "#FF7315",
            color: primary || "#F4F4F4",
          }}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          style={{
            color: primary || "#232020",
            backgroundColor: accent || "#FF7315",
          }}
          className={`block text-[18px] md:text-[24px] lg:text-[30px] rounded-full min-w-[200px] mx-[10%] md:mx-0 h-[59px] md:h-[80px] ${
            editMode && "min-w-[240px]"
          }`}
        >
          {editMode ? "Update " : "Add "}Task
        </button>
      </form>
      <ul className="mx-auto text-[20px] md:text-[30px] lg:text-[40px] max-w-[90%] lg:max-w-[85%]">
        {list?.tasks &&
          Object.keys(list.tasks).map((key) => (
            <li
              key={key}
              id={key}
              className="flex flex-row justify-between gap-2 lg:gap-4 items-center lg:[&>div>button]:opacity-0 [&>div>button]:hover:opacity-100 pb-4"
            >
              <div className="flex flex-row justify-between gap-2 lg:gap-4 items-middle w-[70%] md:w-[80%] lg:w-[90%]">
                <div
                  className={`min-w-[32px] h-[32px] lg:min-w-[42px] lg:h-[42px] rounded-[6px] border-2 md:border-[3px] lg:border-[3.5px] mt-1 md:mt-2 [&>*]:h-0 ${
                    list.tasks[key].completed && "[&>*]:h-[100%]"
                  }`}
                  onClick={() => markCompleted(listId, key)}
                  style={{
                    backgroundColor: background || "#2320",
                    borderColor: accent || "#FF7315",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill={primary}
                      d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"
                    />
                  </svg>
                </div>
                <h3
                  className={`break-words w-[90%] lg:w-full inline-block relative ${
                    list.tasks[key].completed && "line-through "
                  }`}
                >
                  {list.tasks[key].name}
                </h3>
              </div>
              <div className="flex gap-2 lg:gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => editTask(key)}
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill={primary}
                    d="M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => removeTask(listId, key)}
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path fill={primary} d="M12 12h2v12h-2zm6 0h2v12h-2z" />
                  <path
                    fill={primary}
                    d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"
                  />
                </svg>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
