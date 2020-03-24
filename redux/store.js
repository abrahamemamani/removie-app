import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import storage from 'redux-persist/lib/storage';
// import AsyncStorage from '@react-native-community/async-storage';

// export default createStore(reducers, {}, applyMiddleware(reduxThunk));

const persistConfig = {
  key: 'root',
  storage
};

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const persistedReducer = persistReducer(persistConfig, reducers, applyMiddleware(reduxThunk));

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};