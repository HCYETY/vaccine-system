import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
// import {Provider} from 'react-redux'
// import store from './store'
import App from './App'

//渲染App组件到页面
ReactDOM.render(
	<BrowserRouter>
		{/* <Provider store={store}> */}
			<App/>
		{/* </Provider> */}
	</BrowserRouter>,
	document.getElementById('root')
)

// store.subscribe(() => {
// 	ReactDOM.render(
// 		<BrowserRouter>
// 			<App/>
// 		</BrowserRouter>,
// 		document.getElementById('root')
// 	)
// })