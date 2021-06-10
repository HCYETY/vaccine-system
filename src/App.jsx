import React, { Component } from 'react'
import {Link, Route, Switch, Redirect} from 'react-router-dom'

import Input from './components/Input'
import Find_vaccine from './components/Find_vaccine'
import Find_number from './components/Find_number'
import Reserve from './components/Reserve'
import Find_reserve_inform from './components/Find_reserve_inform'
import Cancel_reserve from './components/Cancel_reserve'
import Break_inform from './components/Break_inform'
import Find_cancel_break from './components/Find_cancel_break'

import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="whole">
                <h2 className="topic">疫苗预约管理系统</h2> <hr/>
                <div className="news-left">
                    <Link className="list-group-item" to="/input">输入各注射点某天的总疫苗数量</Link><br/>
                    <Link className="list-group-item" to="/find_vaccine">查询注射点剩余疫苗数量的信息</Link><br/>
                    <Link className="list-group-item" to="/find_number">查询某注射点本周内打第二针的人数</Link><br/>
                    <Link className="list-group-item" to="/reserve">个人预约</Link><br/>
                    <Link className="list-group-item" to="/find_reserve_inform">查询个人预约信息</Link><br/>
                    <Link className="list-group-item" to="/cancel_reserve">取消个人预约</Link><br/>
                    <Link className="list-group-item" to="/break_inform">爽约记录</Link><br/>
                    <Link className="list-group-item" to="/find_cancel_break">查询取消或爽约记录</Link>
                </div>
                <div className="news-right">
                    <Switch>
                        <Route path="/input" component={Input}/>
                        <Route path="/find_vaccine" component={Find_vaccine}/>
                        <Route path="/find_number" component={Find_number}/>
                        <Route path="/reserve" component={Reserve}/>
                        <Route path="/find_reserve_inform" component={Find_reserve_inform}/>
                        <Route path="/cancel_reserve" component={Cancel_reserve}/>
                        <Route path="/break_inform" component={Break_inform}/>
                        <Route path="/find_cancel_break" component={Find_cancel_break}/>
                        <Redirect to="/input"/>
                    </Switch>
                </div>
            </div>
        )
    }
}