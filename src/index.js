                  // JavaScript
// const countDisplay = document.getElementById('count-display');
// const incrementButton = document.getElementById('increment');
// const decrementButton = document.getElementById('decrement');
//
// incrementButton.addEventListener('click', () => {
//   const oldValue = Number(countDisplay.value);
//   const newValue = oldValue + 1;
//   countDisplay.value = newValue;
// })
//
// decrementButton.addEventListener('click', () => {
//   const oldValue = Number(countDisplay.value);
//   const newValue = oldValue -1;
//   countDisplay.value = newValue;
// })

                  // Redux
import store from './store';
import * as actions from "./actions";
import {bindActionCreators} from 'redux';

const countDisplay = document.getElementById('count-display');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

const {inc, dec} = bindActionCreators(actions, store.dispatch)

incrementButton.addEventListener('click', inc);
decrementButton.addEventListener('click', dec);

store.subscribe(() => countDisplay.value = store.getState());
