import React, { Component } from 'react'
import { DatePicker} from 'antd';

let date1 = 0
let date2 = 0

export default class Find_vaccine extends Component {
    onChange1(value, dateString) {
        // console.log('Selected Time: ', value);
        // console.log('Formatted Selected Time: ', dateString);
        date1 = dateString
    }
    onChange2(value, dateString) {
        // console.log('Selected Time: ', value);
        // console.log('Formatted Selected Time: ', dateString);
        date2 = dateString
    }

    find_point = () => {
        const type_point = this.shotpoint
        console.log(this.shotpoint)
        console.log(type_point)
        // switch(type_point) {
        //     case '注射点1':
        //         return point[date1].count1
        //     case '注射点2':
        //         return point[date1].count2
        //     case '注射点3':
        //         return point[date1].count3
        //     case '注射点4':
        //         return point[date1].count4
        //     default:
        //         break;
        // }
    }
    find_second_shot = () => {

    }
    find_number() {

    }
    find_nums = () => {
        
    }

    render() {
        const point = JSON.parse(localStorage.getItem('countArr'))
        if(point) {
            var point1 = point[date2].count1
            var point2 = point[date2].count2
            var point3 = point[date2].count3
            var point4 = point[date2].count4
        }
        const myReserve = JSON.parse(localStorage.getItem('myReserve'))
        if(myReserve) {
            var _reserve_number = myReserve[date2].reserve_number
            var _reserve_nums = myReserve[date2].reserve_nums
            var _second_shot = myReserve[date2].second_shot
        }
        return (
            <div>
                <h3>查询某注射点某天的剩余疫苗数量</h3> <br/>
                想查找哪一天：<DatePicker onChange={this.onChange1}/><br/>
                想查找哪个注射点：
                <select ref={a => this.shotpoint = a}>
                    <option value="注射点1">注射点1</option>    
                    <option value="注射点2">注射点2</option>    
                    <option value="注射点3">注射点3</option>    
                    <option value="注射点4">注射点4</option>    
                </select> <br/>
                输出这天该注射点的剩余疫苗量：{this.find_point()}<br/>
                该注射点本周内打第二针的人数：{this.find_second_shot()}<br/>
                最大预约号： {this.find_number()}<br/>
                <h4>已预约人数：{this.find_nums()}</h4> <br/>

                <hr/>
                
                <h3>查询某天各注射点的剩余疫苗数量</h3><br/>
                想查找哪一天：<DatePicker onChange={this.onChange2}/><br/>
                输出这天所有注射点的剩余疫苗量：{point1+point2+point3+point4}，分别是： <br/>
                注射点1：{point1}<br/>
                注射点2：{point2}<br/>
                注射点3：{point3}<br/>
                注射点4：{point4}
            </div>
        )
    }
}