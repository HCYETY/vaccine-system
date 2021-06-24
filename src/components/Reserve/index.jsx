import React, { Component } from 'react'
import { DatePicker, Input, InputNumber } from 'antd'
import 'antd/dist/antd.css'

let personArr = new Array()
let reserve_number = 0 // 预约号码
let reserve_nums = 0   // 预约人数
let second_shot = 0    // 第二针的人数
const countObj = JSON.parse(localStorage.getItem('countObj'))

export default class Reserve extends Component {
    state = {
        date:0
    }
    onChange = (value, dateString) => {
        this.setState({
            date:dateString
        },()=>{
            console.log(this.state.date)
        })
    }
    submit = () => {
        // 用户的预约信息
        const name = this.name.state.value
        const id = this.id.state.value
        const address = this.address.state.value
        const nums = this.nums.value
        const date = this.state.date
        const points = this.points.value
        // console.log(name, id, address, nums, points)
        const personObj = {
            name:name,
            id:id,
            address:address,
            num:nums,
            shotpoint:points 
        }
        personObj.date = date
        console.log(date)
        console.log(personObj.date)
        personArr.push(personObj)

        // 用户是否能预约成功的判断
        if(countObj[date]) {
            var point1 = countObj[date].count1
            var point2 = countObj[date].count2
            var point3 = countObj[date].count3
            var point4 = countObj[date].count4
        } else {
            alert("您选择的日期没有剩余疫苗，请重新选择日期")
            return
        }
        switch(points) {
            case '注射点1':
                if(point1!==0 && (name && id && address && nums && points)) {
                    alert("恭喜您预约成功！如果想查询您的预约信息，请点击左侧“查询个人预约信息”！")

                    point1--
                    // localStorage.setItem("countObj", point1)

                    reserve_number++
                    reserve_nums++
                    personObj.reserve_number = reserve_number
                    personObj.reserve_nums = reserve_nums
                    if(nums === 2) {
                        second_shot++
                        personObj[id].second_shot = second_shot
                    }
                    localStorage.setItem("myReserve", JSON.stringify(personArr))
                } else {
                    if(point1===0) {
                        alert("该注射点无剩余疫苗，请选择其他注射点")
                    } else if(!(name && id && address && nums && points)) {
                        alert("您的预约信息未填完整，请重新输入！")
                    }
                }
                break;
            case '注射点2':
                if(point2!==0 && (name && id && address && nums && points)) {
                    alert("恭喜您预约成功！如果想查询您的预约信息，请点击左侧“查询个人预约信息”！")

                    point2--
                    localStorage.setItem("countObj", point2)
                    reserve_number++
                    reserve_nums++

                    personObj.reserve_number = reserve_number
                    personObj.reserve_nums = reserve_nums

                    if(nums === 2) {
                        second_shot++
                        personObj[id].second_shot = second_shot
                    }
                    localStorage.setItem("myReserve", JSON.stringify(personArr))
                } else {
                    if(!point2) {
                        alert("该注射点无剩余疫苗，请选择其他注射点")
                    } else if(!(name && id && address && nums && points)) {
                        alert("您的预约信息未填完整，请重新输入！")
                    }
                }
                break;
            case '注射点3':
                if(point3!==0 && (name && id && address && nums && points)) {
                    alert("恭喜您预约成功！如果想查询您的预约信息，请点击左侧“查询个人预约信息”！")

                    point3--
                    localStorage.setItem("countObj", point3)
                    reserve_number++
                    reserve_nums++

                    personObj.reserve_number = reserve_number
                    personObj.reserve_nums = reserve_nums

                    if(nums === 2) {
                        second_shot++
                        personObj[id].second_shot = second_shot
                    }
                    localStorage.setItem("myReserve", JSON.stringify(personArr))
                } else {
                    if(!point3) {
                        alert("该注射点无剩余疫苗，请选择其他注射点")
                    } else if(!(name && id && address && nums && points)) {
                        alert("您的预约信息未填完整，请重新输入！")
                    }
                }
                break;
            case '注射点4':
                if(point4!==0 && (name && id && address && nums && points)) {
                    alert("恭喜您预约成功！如果想查询您的预约信息，请点击左侧“查询个人预约信息”！")

                    point4--
                    localStorage.setItem("countObj", point4)
                    reserve_number++
                    reserve_nums++

                    personObj.reserve_number = reserve_number
                    personObj.reserve_nums = reserve_nums

                    if(nums === 2) {
                        second_shot++
                        personObj[id].second_shot = second_shot
                    }
                    localStorage.setItem("myReserve", JSON.stringify(personArr))
                } else {
                    if(!point4) {
                        alert("该注射点无剩余疫苗，请选择其他注射点")
                    } else if(!(name && id && address && nums && points)) {
                        alert("您的预约信息未填完整，请重新输入！")
                    }
                }
                break;
            default:
                break;
        }
        this.forceUpdate()
    }
    
    render() {
        return (
            <div>
                <h3>预约报名表</h3>
                姓名： <Input placeholder="请输入您的姓名" ref={a => this.name = a}/> <br/>
                身份证号： <Input placeholder="请输入您的身份证号" ref={b => this.id = b}/> <br/>
                单位或社区： <Input placeholder="请输入您工作的单位或所在的社区" ref={c => this.address = c}/> <br/>
                已经注射过的针数： <InputNumber min={0} max={2} ref={d => this.nums = d}/> <br/>
                您想预约哪一天：<DatePicker onChange={this.onChange} ref={c => this.date = c} format="YYYY-MM-DD"/><br/>
                预约注射点：
                <select ref={e => this.points = e}>
                    <option value="注射点1">注射点1</option>    
                    <option value="注射点2">注射点2</option>    
                    <option value="注射点3">注射点3</option>    
                    <option value="注射点4">注射点4</option>    
                </select><br/>
                <button onClick={this.submit}>点击预约</button>
            </div>
        )
    }
}