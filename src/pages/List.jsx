import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionCreators from "../store/actionCreators";
import Navbar from "../components/Navbar";

const List = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((state) => state.lists[listId]);

  useEffect(() => {
    if (list == undefined) navigate("/404");
  }, []);

  function addTask(event) {
    event.preventDefault();
    const task = event.target.elements.text.value;
    if (task == "") return;
    dispatch(actionCreators.addTask(listId, task));
    event.target.reset();
  }

  function removeTask(listId, key) {
    const taskId = key;
    dispatch(actionCreators.removeTask(listId, taskId));
  }
  function markCompleted(listId, key) {
    const taskId = key;
    dispatch(actionCreators.markCompleted(listId, taskId));
  }
  return (
    <div className="app">
      <Navbar bg={list.theme.background} />
      {list.name}
      {JSON.stringify(list.tasks)}
      <ul>
        {list?.tasks &&
          Object.keys(list.tasks).map((key) => (
            <li key={key} id={key}>
              {list.tasks[key].name} completed:
              <button onClick={() => markCompleted(listId, key)}>
                Mark Completed {list.tasks[key].completed && "trueeeeee"}
              </button>
              <button onClick={() => removeTask(listId, key)}>Remove</button>
            </li>
          ))}
      </ul>
      <form onSubmit={addTask}>
        <input type="text" name="text" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default List;
