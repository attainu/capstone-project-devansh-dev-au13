import {getAllProductsReducer} from './reducers/productReducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';


const finalReducer=combineReducers ({
    getAllProductsReducer:getAllProductsReducer
})
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(
    finalReducer,
    composeEnhancers(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );

export default store;