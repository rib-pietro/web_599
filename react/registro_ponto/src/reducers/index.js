import { combineReducers } from 'redux';
import UserReducer, {userActionTypes} from './UserReducer';

const rootReducers = combineReducers({
    user: UserReducer
});

export default rootReducers;