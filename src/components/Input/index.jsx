import React, { Component } from 'react'
// import {is} from 'immutable';

import { DatePicker, InputNumber } from 'antd';
import 'antd/dist/antd.css'

let countObj = {}
let dateValue = 0

export default class Input extends Component {
    state = {
        date:0,
        count1:0,
        count2:0,
        count3:0,
        count4:0
    }

    changeDate(value, dateString) {

        let _date = this.state.date
        console.log("时间是",_date)
        // dateValue = dateString

        _date = dateString
        console.log("时间到底是",_date)

        this.setState({
            date:_date
        },()=>{
            console.log(this.state.date)
            dateValue = this.state.date
            // 2. 将各注射点的疫苗量存入 countObj 中
            countObj[this.state.date] = {
                count1:0,
                count2:0,
                count3:0,
                count4:0
            }
            console.log(countObj)

            // 3. 将 countObj 数组存进 localStorage 中
            localStorage.setItem('countObj', JSON.stringify(countObj))
            console.log(localStorage.getItem('countObj'))
            })
    }

    stockpileTo1 = () => {
        if(this.state.date == 0) {
            alert("您还未选择日期，请选择日期以将疫苗存于当天")
            return 
        }
        console.log(this.state.date)
        console.log(this.state.count1)
        const {value} = this.inputNumber1
        let count1 = this.state.count1
        count1 += value * 1
        this.setState({count1:count1})
        
        countObj[this.state.date].count1 = count1
        localStorage.setItem('countObj', JSON.stringify(countObj))
    }
    stockpileTo2 = () => {
        if(this.state.date == 0) {
            alert("您还未选择日期，请选择日期以将疫苗存于当天")
            return 
        }
        const {value} = this.inputNumber2
        let count2 = this.state.count2
        count2 += value * 1
        this.setState({count2:count2})
        countObj[this.state.date].count2 = count2
        localStorage.setItem('countObj', JSON.stringify(countObj))
    }
    stockpileTo3 = () => {
        if(this.state.date == 0) {
            alert("您还未选择日期，请选择日期以将疫苗存于当天")
            return 
        }
        const {value} = this.inputNumber3
        let count3 = this.state.count3
        count3 += value * 1
        this.setState({count3:count3})
        countObj[this.state.date].count3 = count3
        localStorage.setItem('countObj', JSON.stringify(countObj))
    }
    stockpileTo4 = () => {
        if(this.state.date == 0) {
            alert("您还未选择日期，请选择日期以将疫苗存于当天")
            return 
        }
        const {value} = this.inputNumber4
        let count4 = this.state.count4
        count4 += value * 1
        this.setState({count4:count4})
        countObj[this.state.date].count4 = count4
        localStorage.setItem('countObj', JSON.stringify(countObj))
    }

    shouldComponentUpdate(nextProps, nextState){
        const {count1, count2, count3, count4} = this.state
        // console.log("原来的",this.state)
        // console.log(nextState)
        // console.log(nextState.count1)
        //组件是否需要更新：需要返回一个布尔值，返回true则更新；返回flase不更新，这是一个关键点
        if(nextState.count1!==count1 || nextState.count2!==count2 || nextState.count3!==count3 || nextState.count4!==count4) {
            return true
        }
        return false
    }

    render() {
        const countObj = JSON.parse(localStorage.getItem('countObj'))
        const {date} = this.state
        const point1 = countObj && countObj[date] && countObj[date].count1
        const point2 = countObj && countObj[date] && countObj[date].count2
        const point3 = countObj && countObj[date] && countObj[date].count3
        const point4 = countObj && countObj[date] && countObj[date].count4
        return (
            <fragment>
                选择某一天的注射点存储疫苗： <DatePicker ref={c => this.dates = c} onChange={this.changeDate.bind(this)}  format="YYYY-MM-DD"/><br/>
                <h4>请输入各注射点想要储存的疫苗量：</h4>
                注射点1（洪洞村）：<InputNumber min={0} ref={c => this.inputNumber1 = c}/> <button onClick={this.stockpileTo1}>存入</button>注射点1已存的疫苗量：{point1}<br/>
                注射点2（坑尾村）：<InputNumber min={0} ref={c => this.inputNumber2 = c}/> <button onClick={this.stockpileTo2}>存入</button>注射点2已存的疫苗量：{point2}<br/>
                注射点3（新地村）：<InputNumber min={0} ref={c => this.inputNumber3 = c}/> <button onClick={this.stockpileTo3}>存入</button>注射点3已存的疫苗量：{point3}<br/>
                注射点4（莲峰村）：<InputNumber min={0} ref={c => this.inputNumber4 = c}/> <button onClick={this.stockpileTo4}>存入</button>注射点4已存的疫苗量：{point4}<br/>
                这天总共存储了{point1+point2+point3+point4}支疫苗
            </fragment>
        )
    }
}