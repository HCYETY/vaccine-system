import React, { Component } from 'react'
import { Input, Popconfirm, message, Button } from 'antd';
import 'antd/dist/antd.css'

export default class Cancel_reserve extends Component {

    cancel = () => {

    }
    
    render() {
        const text = '您是否确定取消预约？'
        function confirm() {
            message.info('您已成功取消预约')
        }
        return (
            <div>
                如果您想取消个人预约，请如实填写下表：<br/>

                {/* 姓名：<input type="text" placeholder="请输入您的姓名"/> <br/> */}
                姓名： <Input placeholder="请输入您的姓名" ref={a => this.name = a}/> <br/>
                {/* 身份证号： <input type="text" placeholder="请输入您的身份证号"/> <br/> */}
                身份证号： <Input placeholder="请输入您的身份证号" ref={a => this.id = a}/> <br/>
                已预约过的注射点：
                <select ref={a => this.shotpoint = a}>
                    <option value="注射点1">注射点1</option>    
                    <option value="注射点2">注射点2</option>    
                    <option value="注射点3">注射点3</option>    
                    <option value="注射点4">注射点4</option>    
                </select> <br/>
                预约成功号：<Input placeholder="请输入您曾预约成功的号码" ref={a => this.num = a}/> 

                <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Popconfirm placement="top" title={text} onConfirm={confirm} okText="是" cancelText="否">
                    <Button onClick={this.cancel()}>点击取消预约</Button>
                </Popconfirm>
            </div>
        )
    }
}