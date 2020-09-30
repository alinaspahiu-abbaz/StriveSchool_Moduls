import {createStore} from "redux";
import rootReducer from "../reducers";

const intialState ={
    cart: { products: [] }
  }

export default function configureStore(){
  return createStore(rootReducer, intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
}