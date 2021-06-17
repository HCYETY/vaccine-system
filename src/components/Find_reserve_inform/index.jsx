import React, { Component } from 'react'

export default class Find_reserve_inform extends Component {
    render() {
        const person = JSON.parse(localStorage.getItem('myobject'))
        const person1_name = person[0].name
        const person1_id = person[0].id
        const person1_address = person[0].address
        const person1_num = person[0].num
        const person1_shotpoint = person[0].shotpoint
        const person1_reserve_number = person[0].reserve_number
        console.log(person1_name, person1_id, person1_address, person1_num, person1_shotpoint)

        return (
            <div>
                <h3>以下是您预约成功的相关信息</h3> <br/>
                姓名：{person1_name}<br/>
                身份证号：{person1_id}<br/>
                预约注射点：{person1_shotpoint}<br/>
                预约成功号：{person1_reserve_number}<br/>
            </div>
        )
    }
}
