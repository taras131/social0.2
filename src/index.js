import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/State";
import App from './App';

const reRenderDOM = (state) =>{
	ReactDOM.render(
		<React.StrictMode>
			<App state = {store.getState()}
				 dispatch = {store.dispatch.bind(store)} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}
reRenderDOM(store.getState());
store.suscribe(reRenderDOM);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
