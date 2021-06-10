/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, combineReducers} from 'redux'

//引入为Input组件服务的reducer
import inputReducer from '../redux/reducers/input'
//引入为Find_vaccine组件服务的reducer
// import find_vaccineReducer from '../redux/reducers/find_vaccine'
// 合并多个reducers
// const allReducer = combineReducers({
// 	input:inputReducer,
// 	find:find_vaccineReducer 
// })

//暴露store
export default createStore(inputReducer)
// export default createStore(find_vaccineReducer)