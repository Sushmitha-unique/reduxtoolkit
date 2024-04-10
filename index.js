import store from "./redux/app/store.js";
import { increase,decrease,reset } from "./redux/feature/counter/CounterSlice.js";

console.log(store.getState())
console.log(store.dispatch(increase()))
console.log(store.getState())
console.log(store.dispatch(increase()))
console.log(store.getState())
console.log(store.dispatch(increase()))
console.log(store.getState())
console.log(store.dispatch(increase()))
console.log(store.getState())
console.log(store.dispatch(decrease()))
console.log(store.getState())
console.log(store.dispatch(reset()))
console.log(store.getState())
