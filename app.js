const {incrementAction, decrementAction} = require('./actions/CounterActions');
const {counterReducer} = require('./reducers/CounterReducer');
const {addItemAction} = require('./actions/ListActions');
const {listReducer} = require('./reducers/listReducer');
const redux = require('redux');

const createStore = redux.legacy_createStore;
const combineReducer = redux.combineReducers;

// --------------------------------------

const AllReducers = combineReducer({
    counter: counterReducer,
    list: listReducer
});
const store = createStore(AllReducers);

console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(addItemAction('Novo Item'))
store.dispatch(incrementAction());
store.dispatch(incrementAction(2));
store.dispatch(decrementAction());
store.dispatch(decrementAction(2));
