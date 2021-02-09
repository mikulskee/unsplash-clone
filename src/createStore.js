import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import photosReducer from './store/reducers/photos';

const rootReducer = combineReducers({
	photos: photosReducer,
});
const composeEnhancers =
	(process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) ||
	compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// sagaMiddleware.run(watchPhotos);

export default store;
