import React, { Component } from 'react'

export default class Find_reserve_inform extends Component {
    render() {
        const person = JSON.parse(localStorage.getItem('myReserve'))
        if(person) {
            var length = person.length - 1
            var person1_name = person[length].name
            var person1_id = person[length].id
            var person1_address = person[length].address
            var person1_num = person[length].num
            var person1_shotpoint = person[length].shotpoint
            var person1_reserve_number = person[length].reserve_number
        }
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