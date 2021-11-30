import { combineReducers } from "redux";
import AppActivityReducer from './AppActivityReducer';
import UserReducer from './UserReducer';



const Root = combineReducers({

    AppActivityReducer,
    UserReducer
});

export default Root