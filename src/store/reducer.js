import themes from "../assets/theme";
import actionTypes from "./actionTypes";

const initialState = {
  lists: {
    // D6sC8y: {
    //   name: "ListName",
    //   theme: {
    //     primary: "#2D4659",
    //     background: "#FDFBDA",
    //     accent: "#819F7F",
    //   },
    //   tasks: {
    //     t7FsHG: {
    //       name: "TaskName",
    //       completed: true,
    //     },
    //     d8FsHG: {
    //       name: "TaskName",
    //       completed: false,
    //     },
    //   },
    // },
  },
};

function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = characters.charAt(
    Math.floor(Math.random() * characters.length - 10)
  );
  do {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  } while (result.length < 5);
  return result;
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_LIST: {
      const { name, theme } = action.payload;
      const newListId = generateRandomString();
      return {
        ...state,
        lists: {
          ...state.lists,
          [newListId]: {
            name,
            theme,
            tasks: {},
          },
        },
      };
    }
    case actionTypes.ADD_TASK: {
      const { listId, name } = action.payload;
      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...state?.lists[listId],
            tasks: {
              [generateRandomString()]: {
                name,
                completed: false,
              },
              ...state?.lists[listId]?.tasks,
            },
          },
        },
      };
    }
    case actionTypes.EDIT_LIST: {
      const { listId, name, theme } = action.payload;
      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...state.lists[listId],
            name,
            theme: themes[theme],
          },
        },
      };
    }
    case actionTypes.EDIT_TASK: {
      const { listId, taskId, name } = action.payload;
      const deepCopyState = JSON.parse(JSON.stringify(state));
      deepCopyState.lists[listId].tasks[taskId].name = name;
      console.log(action.payload);
      return {
        ...deepCopyState,
      };
    }
    case actionTypes.MARK_COMPLETED: {
      const { listId, taskId } = action.payload;
      const deepCopyState = JSON.parse(JSON.stringify(state));
      deepCopyState.lists[listId].tasks[taskId].completed =
        !deepCopyState.lists[listId].tasks[taskId].completed;
      return deepCopyState;
    }
    case actionTypes.REMOVE_LIST: {
      const { listId } = action.payload;
      let { [listId]: _, ...updatedLists } = state.lists;
      return {
        lists: {
          ...updatedLists,
        },
      };
    }
    case actionTypes.REMOVE_TASK: {
      const { listId, taskId } = action.payload;
      let { [taskId]: _, ...updatedTasks } = state.lists[listId].tasks;
      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...state.lists[listId],
            tasks: {
              ...updatedTasks,
            },
          },
        },
      };
    }
    default:
      return state;
  }
}

export default reducer;
