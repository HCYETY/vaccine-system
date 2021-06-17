import React, { Component } from 'react'
import { Input, InputNumber } from 'antd'

let personArr = new Array()
let length = 0
let reserve_number = 0 // 预约号码
let reserve_nums = 0   // 预约人数
let second_shot = 0    // 第二针的人数

export default class Reserve extends Component {

    submit = () => {
        // 用户的预约信息
        const name = this.name.state.value
        const id = this.id.state.value
        const address = this.address.state.value
        const nums = this.nums.value
        const points = this.points.value
        // console.log(name, id, address, nums, points)
        let personObj = {
            name:name,
            id:id,
            address:address,
            num:nums,
            shotpoint:points,
        }
        personArr[length] = personObj

        // 用户是否能预约成功的判断
        let point1 = localStorage.getItem('count1')
        let point2 = JSON.parse(localStorage.getItem('count2'))
        let point3 = JSON.parse(localStorage.getItem('count3'))
        let point4 = JSON.parse(localStorage.getItem('count4'))
        // console.log(point1, point2, point3, point4)
        switch(points) {
            case '注射点1':
                if(point1!=0) {
                    alert("恭喜您预约成功,请记住您的预约信息："+<br/>+"预约成功的号码："+{reserve_number}+<br/>+"预约成功的注射时间段："+{reserve_number})

                    point1--
                    localStorage.setItem("count1", point1)

                    reserve_number++
                    reserve_nums++
                    personArr[length].reserve_number = reserve_number
                    personArr[length].reserve_nums = reserve_nums

                    if(nums == 2) {
                        second_shot++
                        personArr[length].second_shot = second_shot
                    }
                    length++
                } else {
                    alert("该注射点无剩余疫苗，请选择其他注射点")
                }
                break;
            case '注射点2':
                if(point2!=0) {
                    alert("恭喜您预约成功,请记住您的预约信息："+<br/>+"预约成功的号码："+{reserve_number}+<br/>+"预约成功的注射时间段："+{reserve_number})

                    point2--
                    localStorage.setItem("count2", point2)
                    reserve_number++
                    reserve_nums++

                    personArr[length].reserve_number = reserve_number
                    personArr[length].reserve_nums = reserve_nums

                    if(nums == 2) {
                        second_shot++
                        personArr[length].second_shot = second_shot
                    }
                    length++
                } else {
                    alert("该注射点无剩余疫苗，请选择其他注射点")
                }
                break;
            case '注射点3':
                if(point3!=0) {
                    alert("恭喜您预约成功,请记住您的预约信息："+<br/>+"预约成功的号码："+{reserve_number}+<br/>+"预约成功的注射时间段："+{reserve_number})

                    point3--
                    localStorage.setItem("count3", point3)
                    reserve_number++
                    reserve_nums++

                    personArr[length].reserve_number = reserve_number
                    personArr[length].reserve_nums = reserve_nums

                    if(nums == 2) {
                        second_shot++
                        personArr[length].second_shot = second_shot
                    }
                    length++
                } else {
                    alert("该注射点无剩余疫苗，请选择其他注射点")
                }
                break;
            case '注射点4':
                if(point4!=0) {
                    alert("恭喜您预约成功,请记住您的预约信息："+<br/>+"预约成功的号码："+{reserve_number}+<br/>+"预约成功的注射时间段："+{reserve_number})

                    point4--
                    localStorage.setItem("count4", point4)
                    reserve_number++
                    reserve_nums++

                    personArr[length].reserve_number = reserve_number
                    personArr[length].reserve_nums = reserve_nums

                    if(nums == 2) {
                        second_shot++
                        personArr[length].second_shot = second_shot
                    }
                    length++
                } else {
                    alert("该注射点无剩余疫苗，请选择其他注射点")
                }
                break;
        }
        localStorage.setItem("myobject", JSON.stringify(personArr))
    }
    
    render() {
        return (
            <div>
                <h3>预约报名表</h3>
                姓名： <Input placeholder="请输入您的姓名" ref={a => this.name = a}/> <br/>
                身份证号： <Input placeholder="请输入您的身份证号" ref={b => this.id = b}/> <br/>
                单位或社区： <Input placeholder="请输入您工作的单位或所在的社区" ref={c => this.address = c}/> <br/>
                已经注射过的针数： <InputNumber min={0} max={2} ref={d => this.nums = d}/> <br/>
                预约注射点：
                <select ref={e => this.points = e}>
                    <option value="注射点1">注射点1</option>    
                    <option value="注射点2">注射点2</option>    
                    <option value="注射点3">注射点3</option>    
                    <option value="注射点4">注射点4</option>    
                </select><br/>
                <button onClick={this.submit}>点击预约</button>
                {/* <div className='show'> */}
                    <h2>预约成功的号码：{reserve_number}</h2>
                {/* </div> */}
            </div>
        )
    }
}