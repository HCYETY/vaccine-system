/* 
	该文件专门为Input组件生成action对象
*/
import {ST_ONE, ST_TWO, ST_THREE, ST_FOUR} from '../constant'

export const createStockpileTo1Action = data => ({type:ST_ONE, data:data})
export const createStockpileTo2Action = data => ({type:ST_TWO, data:data})
export const createStockpileTo3Action = data => ({type:ST_THREE, data:data})
export const createStockpileTo4Action = data => ({type:ST_FOUR, data:data})
/* 
	该文件专门为Count组件生成action对象
*/
// import {INCREMENT,DECREMENT} from './constant'

// //同步action，就是指action的值为Object类型的一般对象
// export const createIncrementAction = data => ({type:INCREMENT,data})
// export const createDecrementAction = data => ({type:DECREMENT,data})

// //异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
// export const createIncrementAsyncAction = (data,time) => {
// 	return (dispatch)=>{
// 		setTimeout(()=>{
// 			dispatch(createIncrementAction(data))
// 		},time)
// 	}
// }