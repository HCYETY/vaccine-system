import React, { Component } from 'react'

import { DatePicker, InputNumber  } from 'antd';
import 'antd/dist/antd.css'

window.localStorage.setItem('count1', '0')
window.localStorage.setItem('count2', '0')
window.localStorage.setItem('count3', '0')
window.localStorage.setItem('count4', '0')

export default class Input extends Component {
    // componentDidMount() {

    // }

    stockpileTo1 = () => {
        const {value} = this.inputNumber1
        const key = localStorage.getItem('count1')
        localStorage.count1 = JSON.parse(key) + value * 1
    }
    stockpileTo2 = () => {
        const {value} = this.inputNumber2
        const key = localStorage.getItem('count2')
        localStorage.count2 = JSON.parse(key) + value * 1
    }
    stockpileTo3 = () => {
        const {value} = this.inputNumber3
        const key = localStorage.getItem('count3')
        localStorage.count3 = JSON.parse(key) + value * 1
    }
    stockpileTo4 = () => {
        const {value} = this.inputNumber4
        const key = localStorage.getItem('count4')
        localStorage.count4 = JSON.parse(key) + value * 1
    }

    // componentWillReceiveProps(nextProps) {
    //     if(this.props.sharecard_show !== nextProps.sharecard_show) {
    //         this.setState()
    //     }
    // }

    render() {

        // const {count1, count2, count3, count4} = this.state
        const point1 = JSON.parse(localStorage.getItem('count1'));
        const point2 = JSON.parse(localStorage.getItem('count2'));
        const point3 = JSON.parse(localStorage.getItem('count3'));
        const point4 = JSON.parse(localStorage.getItem('count4'));

        return (
            <div>
                选择某一天的注射点存储疫苗： <DatePicker ref={c => this.input =c}/><br/>
                <h4>请输入各注射点想要储存的疫苗量：</h4>
                注射点1（洪洞村）：<InputNumber min={0} ref={c => this.inputNumber1 = c}/> <button onClick={this.stockpileTo1}>存入</button>注射点1已存的疫苗量：{point1}<br/>
                注射点2（坑尾村）：<InputNumber min={0} ref={c => this.inputNumber2 = c}/> <button onClick={this.stockpileTo2}>存入</button>注射点2已存的疫苗量：{point2}<br/>
                注射点3（新地村）：<InputNumber min={0} ref={c => this.inputNumber3 = c}/> <button onClick={this.stockpileTo3}>存入</button>注射点3已存的疫苗量：{point3}<br/>
                注射点4（莲峰村）：<InputNumber min={0} ref={c => this.inputNumber4 = c}/> <button onClick={this.stockpileTo4}>存入</button>注射点4已存的疫苗量：{point4}<br/>
                这天总共存储了{point1+point2+point3+point4}支疫苗
            </div>
        )
    }
}