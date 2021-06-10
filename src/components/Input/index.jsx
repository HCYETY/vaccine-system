import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
import store from '../../redux/store'
import {
    createStockpileTo1Action, 
    createStockpileTo2Action, 
    createStockpileTo3Action, 
    createStockpileTo4Action
} from '../../redux/actions/input'

import { DatePicker, InputNumber  } from 'antd';
import 'antd/dist/antd.css'

export default class Input extends Component {
    stockpileTo1 = () => {
        const {value} = this.inputNumber1
		store.dispatch(createStockpileTo1Action(value*1))
    }
    stockpileTo2 = () => {
        const {value} = this.inputNumber2
        store.dispatch(createStockpileTo2Action(value*1))
    }
    stockpileTo3 = () => {
        const {value} = this.inputNumber3
        store.dispatch(createStockpileTo3Action(value*1))
    }
    stockpileTo4 = () => {
        const {value} = this.inputNumber4
        store.dispatch(createStockpileTo4Action(value*1))
    }

    render() {
        return (
            <div>
                选择某一天的注射点存储疫苗： <DatePicker ref={c => this.input =c}/><br/>
                <h4>请输入各注射点想要储存的疫苗量：</h4>
                注射点1：<InputNumber min={0} ref={c => this.inputNumber1 = c}/> <button onClick={this.stockpileTo1}>存入</button>注射点1已存的疫苗量：{store.getState()}<br/>
                注射点2：<InputNumber min={0} ref={c => this.inputNumber2 = c}/> <button onClick={this.stockpileTo2}>存入</button>注射点2已存的疫苗量：{store.getState()}<br/>
                注射点3：<InputNumber min={0} ref={c => this.inputNumber3 = c}/> <button onClick={this.stockpileTo3}>存入</button>注射点3已存的疫苗量：{store.getState()}<br/>
                注射点4：<InputNumber min={0} ref={c => this.inputNumber4 = c}/> <button onClick={this.stockpileTo4}>存入</button>注射点4已存的疫苗量：{store.getState()}<br/>
                这天总共存储了{store.getState()}支疫苗
            </div>
        )
    }
}