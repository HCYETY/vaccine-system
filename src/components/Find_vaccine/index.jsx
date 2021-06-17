import React, { Component } from 'react'
import { DatePicker} from 'antd';

export default class Find_vaccine extends Component {

    // componentWillUnmount() {
    //     localStorage.removeItem("myobject")
    // }

    render() {

        const point1 = JSON.parse(localStorage.getItem('count1'));
        const point2 = JSON.parse(localStorage.getItem('count2'));
        const point3 = JSON.parse(localStorage.getItem('count3'));
        const point4 = JSON.parse(localStorage.getItem('count4'));
        const myobject = JSON.parse(localStorage.getItem('myobject'))
        const _reserve_number = myobject[0].reserve_number
        const _reserve_nums = myobject[0].reserve_nums
        const _second_shot = myobject[0].second_shot
        // console.log(myobject)
        // console.log(_reserve_number)
        // console.log(_second_shot)
        return (
            <div>
                <h3>查询某注射点某天的剩余疫苗数量</h3> <br/>
                想查找哪个注射点：
                <select ref={a => this.shotpoint = a}>
                    <option value="注射点1">注射点1</option>    
                    <option value="注射点2">注射点2</option>    
                    <option value="注射点3">注射点3</option>    
                    <option value="注射点4">注射点4</option>    
                </select> <br/>
                想查找哪一天：<DatePicker/><br/>
                输出这天该注射点的剩余疫苗量：{point1}<br/>
                该注射点本周内打第二针的人数：{_second_shot}<br/>
                最大预约号： {_reserve_number}<br/>
                <h4>已预约人数：{_reserve_nums}</h4> <br/>

                <hr/>
                
                <h3>查询某天各注射点的剩余疫苗数量</h3><br/>
                想查找哪一天：<DatePicker/><br/>
                输出这天所有注射点的剩余疫苗量：{point1+point2+point3+point4}，分别是： <br/>
                注射点1：{point1}<br/>
                注射点2：{point2}<br/>
                注射点3：{point3}<br/>
                注射点4：{point4}
            </div>
        )
    }
}