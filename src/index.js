// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入react-router-dom
import {BrowserRouter} from 'react-router-dom'
// 引入App组件
import App from './App'

import store from './redux/store'

//渲染App组件到页面
ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
)

store.subscribe(() => {
	ReactDOM.render(
		<BrowserRouter>
			<App/>
		</BrowserRouter>,
		document.getElementById('root')
	)
})