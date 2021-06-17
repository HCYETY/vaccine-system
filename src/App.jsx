import React, { Component } from 'react'
import {NavLink , Route, Switch, Redirect} from 'react-router-dom'

import Input from './components/Input'
import Find_vaccine from './components/Find_vaccine'
import Reserve from './components/Reserve'
import Find_reserve_inform from './components/Find_reserve_inform'
import Cancel_reserve from './components/Cancel_reserve'
import Find_cancel_break from './components/Find_cancel_break'

import './App.css'

export default class App extends Component {

    // componentWillUnmount()

    render() {
        return (
            <div className="whole">
                <h2 className="topic">疫苗预约管理系统</h2> <hr/>
                <div className="news-left">
                    <NavLink activeClassName="blue" className="list-group-item" to="/input">输入某天各注射点存入的疫苗数量</NavLink ><br/>
                    <NavLink activeClassName="blue" className="list-group-item" to="/find_vaccine">查询注射点疫苗信息</NavLink><br/>
                    <NavLink activeClassName="blue" className="list-group-item" to="/reserve">个人预约</NavLink><br/>
                    <NavLink activeClassName="blue" className="list-group-item" to="/find_reserve_inform">查询个人预约信息</NavLink><br/>
                    <NavLink activeClassName="blue" className="list-group-item" to="/cancel_reserve">取消个人预约</NavLink><br/>
                    <NavLink activeClassName="blue" className="list-group-item" to="/find_cancel_break">查询取消或爽约记录</NavLink>
                </div>
                <div className="news-right">
                    <Switch>
                        <Route path="/input" component={Input}/>
                        <Route path="/find_vaccine" component={Find_vaccine}/>
                        <Route path="/reserve" component={Reserve}/>
                        <Route path="/find_reserve_inform" component={Find_reserve_inform}/>
                        <Route path="/cancel_reserve" component={Cancel_reserve}/>
                        <Route path="/find_cancel_break" component={Find_cancel_break}/>
                        <Redirect to="/input"/>
                    </Switch>
                </div>
            </div>
        )
    }
}