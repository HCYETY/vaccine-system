import React, { Component } from 'react'
import {is} from 'immutable';

import { DatePicker, InputNumber } from 'antd';
import 'antd/dist/antd.css'

let countObj = {}
let dateValue = 0

export default class Input extends Component {
    state = {
        count1:0,
        count2:0,
        count3:0,
        count4:0
    }

    changeDate(value, dateString) {
        console.log(value)
        console.log(dateString)
        dateValue = dateString

        // 2. 将各注射点的疫苗量存入 countObj 中
        countObj[dateValue] = {
            count1:0,
            count2:0,
            count3:0,
            count4:0
        }

        // 3. 将 countObj 数组存进 localStorage 中
        localStorage.setItem('countObj', JSON.stringify(countObj))
    }

    stockpileTo1 = () => {
        if(dateValue == 0) {
            alert("您还未选择日期，请选择日期以将疫苗存于当天")
            return 
        }
        const {value} = this.inputNumber1
        let count1 = this.state.count1
        count1 += value * 1
        countObj[dateValue].count1 = count1
        localStorage.setItem('countObj', JSON.stringify(countObj))
        this.setState({count1:count1})
    }
    stockpileTo2 = () => {
        if(dateValue == 0) {
            alert("您还未选择日期，请选择日期以将疫苗存于当天")
            return 
        }
        const {value} = this.inputNumber2
        let count2 = this.state.count2
        count2 += value * 1
        countObj[dateValue].count2 = count2
        localStorage.setItem('countObj', JSON.stringify(countObj))
        this.setState({count2:count2})
    }
    stockpileTo3 = () => {
        if(dateValue == 0) {
            alert("您还未选择日期，请选择日期以将疫苗存于当天")
            return 
        }
        const {value} = this.inputNumber3
        let count3 = this.state.count3
        count3 += value * 1
        countObj[dateValue].count3 = count3
        localStorage.setItem('countObj', JSON.stringify(countObj))
        this.setState({count3:count3})
    }
    stockpileTo4 = () => {
        if(dateValue == 0) {
            alert("您还未选择日期，请选择日期以将疫苗存于当天")
            return 
        }
        const {value} = this.inputNumber4
        let count4 = this.state.count4
        count4 += value * 1
        countObj[dateValue].count4 = count4
        localStorage.setItem('countObj', JSON.stringify(countObj))
        this.setState({count4:count4})
    }

    shouldComponentUpdate(nextProps, nextState){
        const {count1, count2, count3, count4} = this.state
        // const {newCount1, newCount2, newCount3, newCount4} = this.nextState
        console.log("原来的",this.state)
        console.log(nextState)
        console.log(nextState.count1)
        //组件是否需要更新：需要返回一个布尔值，返回true则更新；返回flase不更新，这是一个关键点
        if(nextState.count1!==count1 || nextState.count2!==count2 || nextState.count3!==count3 || nextState.count4!==count4) {
            return true
        }
        return false
    }
    // shouldComponentUpdate(nextProps) {
    //     if(JSON.stringify(nextProps) == JSON.stringify(this.props)) {
    //       return false
    //     } else {
    //       return true
    //     }
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     const thisProps = this.props.countObj || {};
    //     const thisState = this.state || {};
    //     nextState = nextState || {};
    //     nextProps = nextProps || {};

    //     if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
    //         Object.keys(thisState).length !== Object.keys(nextState).length) {
    //         return true;
    //     }

    //     for (const key in nextProps) {
    //         if (!is(thisProps[key], nextProps[key])) {
    //             return true;
    //         }
    //     }

    //     for (const key in nextState) {
    //         if (!is(thisState[key], nextState[key])) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    render() {
        const countObj = localStorage.getItem('countObj')
        const point1 = JSON.parse(countObj)
        const point2 = JSON.parse(countObj)
        const point3 = JSON.parse(countObj)
        const point4 = JSON.parse(countObj)
        // const countObj = localStorage.getItem('countObj')[dateValue]
        // const point1 = JSON.parse(countObj.count1)
        // const point2 = JSON.parse(countObj.count2)
        // const point3 = JSON.parse(countObj.count3)
        // const point4 = JSON.parse(countObj.count4)
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