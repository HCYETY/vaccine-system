// /* 
// 	1.该文件是用于创建一个为Input组件服务的reducer，reducer的本质就是一个函数
// 	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
// */
// import {ST_ONE, ST_TWO, ST_THREE, ST_FOUR} from '../constant'

// const init = 0,
// 	  vaccintPoint1 = 0, 
// 	  vaccintPoint2 = 0, 
// 	  vaccintPoint3 = 0, 
// 	  vaccintPoint4 = 0 

// export default function inputReducer(preState = init, action){
// 	//从action对象中获取：type、data
// 	const {type,data} = action
// 	//根据type决定如何加工数据
// 	switch (type) {
// 		case ST_ONE:
// 			return vaccintPoint1 = preState + data
// 		case ST_TWO:
// 			return vaccintPoint2 = preState + data
// 		case ST_THREE: 
// 			return vaccintPoint3 = preState + data
// 		case ST_FOUR:
// 			return vaccintPoint4 = preState + data
// 		default:
// 			return init
// 	}
// }

// /* 
// 	1.该文件是用于创建一个为Input组件服务的reducer，reducer的本质就是一个函数
// 	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
// */
// import {ST_ONE, ST_TWO, ST_THREE, ST_FOUR} from '../constant'
// // import {STP_ONE, STP_TWO, STP_THREE, STP_FOUR} from '../constant'

// const initState = {
// 	count1:0,
// 	count2:0,
// 	count3:0,
// 	count4:0
// }
// export default function inputReducer(preState=initState, action){
// 	//从action对象中获取：type、data
// 	const {type,data} = action
// 	// const {stockpilePoint1, stockpilePoint2, stockpilePoint3, stockpilePoint4} = data
// 	//根据type决定如何加工数据
// 	switch (type) {
// 		case ST_ONE:
// 			return preState.count1 + data
// 		case ST_TWO:
// 			return preState.count2 + data
// 		case ST_THREE:
// 			return preState.count3 + data
// 		case ST_FOUR:
// 			return preState.count4 + data
// 		default:
// 			return initState
// 	}
// }

/* 
	1.该文件是用于创建一个为Input组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {ST_ONE, ST_TWO, ST_THREE, ST_FOUR} from '../constant'
// import {STP_ONE, STP_TWO, STP_THREE, STP_FOUR} from '../constant'

const initState = 0 //初始化状态
export default function inputReducer(preState=initState, action){
	//从action对象中获取：type、data
	const {type,data} = action
	// const {stockpilePoint1, stockpilePoint2, stockpilePoint3, stockpilePoint4} = data
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