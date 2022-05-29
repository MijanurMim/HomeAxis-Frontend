import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  newProjectReducer,
  projectDetailsReducer,
  projectReducer,
  updateProjectReducer,
} from "./redux/reducers/projectReducer";
import { userReducer } from "./redux/reducers/userReducer";

const reducer = combineReducers({
  user: userReducer,

  projects: projectReducer,
  projectDetails: projectDetailsReducer,
  newProject: newProjectReducer,
  updateProject: updateProjectReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
