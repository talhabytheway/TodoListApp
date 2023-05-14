import { Route, Routes, BrowserRouter } from "react-router-dom";
import Lists from "./pages/Lists";
import List from "./pages/List";
import EditList from "./pages/EditList";
import NewList from "./pages/NewList";
import NotFoundPage from "./pages/NotFoundPage";
import store from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

function App() {
  return (
    <div className="pattern app relative font-st">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Lists />}></Route>
              <Route exact path="/lists" element={<Lists />}></Route>
              <Route exact path="/list/:listId" element={<List />}></Route>
              <Route
                exact
                path="/list/edit/:listId"
                element={<EditList />}
              ></Route>
              <Route exact path="/list/new" element={<NewList />}></Route>
              <Route exact path="/404" element={<NotFoundPage />}></Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

//shows all of the lists
// app.com/
// app.com/lists

// //create new list
// app.com/lists/new

// //shows list items with following IDs
// app.com/lists/[listID]

// //shows list to be edited prefilled with all of list info, name and theme
// app.com/lists/edit/[listID]
