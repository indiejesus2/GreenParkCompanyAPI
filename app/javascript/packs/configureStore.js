import {createStore, applyMiddleware} from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk';
import employeesReducer from '../reducers/employeesReducer'
import contractorsReducer from '../reducers/contractorsReducer'
import jobsReducer from '../reducers/jobsReducer';
import adminReducer from '../reducers/adminReducer';
import errorsReducer from '../reducers/errorsReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    employeesReducer,
    contractorsReducer,
    jobsReducer,
    adminReducer,
    errorsReducer
  })

const persistenceConfigs = {
    key: "loggedIn",
    storage
}

const persistedReducer = persistReducer(persistenceConfigs, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store)
export { persistor, store }