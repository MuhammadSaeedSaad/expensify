import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter"
// to reset the css for all browsers to start from the same point (vid 8.4)
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 1000000, createdAt: 0}));
store.dispatch(addExpense({ description: "Gas bill", amount: 2000, createdAt: 1}));
store.dispatch(addExpense({ description: "Rent", amount: 1000, createdAt: 3}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));