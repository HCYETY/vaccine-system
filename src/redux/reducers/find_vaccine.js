/* 
	1.该文件是用于创建一个为Find_vaccine组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {ST_ONE, ST_TWO, ST_THREE, ST_FOUR} from '../constant'

const initState = [] //初始化状态
export default function find_vaccineReducer(preState=initState, action){
	//从action对象中获取：type、data
	const {type,data} = action
	//根据type决定如何加工数据
	switch (type) {
		case ST_ONE:
			return preState + data
		case ST_TWO:
			return preState + data
		case ST_THREE:
			return preState + data
		case ST_FOUR:
			return preState + data
		default:
			return initState
	}
}