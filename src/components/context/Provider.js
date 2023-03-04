import React from "react";
import { Provider } from "react-redux";
import {legacy_createStore as createStore} from 'redux';

import reducers from "./reducers";
import ingredientList from './store';

const IngredientListProvider = ({children}) => {
    const store = createStore(reducers,ingredientList);

    return <Provider store={store}>{children}</Provider>
}
export default IngredientListProvider;