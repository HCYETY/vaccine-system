/* 
	该文件专门为Find_vaccine组件生成action对象
*/
import {ST_ONE, ST_TWO, ST_THREE, ST_FOUR} from '../constant'

export const stockpileNum1Action = data => ({type:ST_ONE, data})
export const stockpileNum2Action = data => ({type:ST_TWO, data})
export const stockpileNum3Action = data => ({type:ST_THREE, data})
export const stockpileNum4Action = data => ({type:ST_FOUR, data})