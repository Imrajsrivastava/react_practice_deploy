import {legacy_createStore as createStore,applyMiddleware,combineReducers} from "redux";
import signupReducer from "./signupReducer";
import transactionsReducer from "./transactionsReducer";
import thunk from "redux-thunk"

const bothReducer = combineReducers({signupReducer,transactionsReducer})
const store = createStore(bothReducer,applyMiddleware(thunk));

export default store;