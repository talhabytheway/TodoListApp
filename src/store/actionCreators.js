import actionTypes from "./actionTypes";

export default {
  addList: (name, theme) => ({
    type: actionTypes.ADD_LIST,
    payload: { name, theme },
  }),

  addTask: (listId, name) => ({
    type: actionTypes.ADD_TASK,
    payload: { listId, name },
  }),

  editList: (id, name, theme) => ({
    type: actionTypes.EDIT_LIST,
    payload: { id, name, theme },
  }),

  markCompleted: (listId, taskId) => ({
    type: actionTypes.MARK_COMPLETED,
    payload: { listId, taskId },
  }),

  editTask: (listId, taskId, name) => ({
    type: actionTypes.EDIT_TASK,
    payload: { listId, taskId, name },
  }),

  removeList: (listId) => ({
    type: actionTypes.REMOVE_LIST,
    payload: { listId },
  }),
  removeTask: (listId, taskId) => ({
    type: actionTypes.REMOVE_TASK,
    payload: { listId, taskId },
  }),
};
