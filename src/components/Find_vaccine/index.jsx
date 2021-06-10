import React, { Component } from 'react'
import { DatePicker} from 'antd';
import store from '../../redux/store'
// import { connect } from "react-redux";

export default class Find_vaccine extends Component {
    render() {
        return (
            <div>
                <h3>查询某注射点某天的剩余疫苗数量</h3><br/>
                想查找哪个注射点：
                <select ref={a => this.shotpoint = a}>
                    <option value="注射点1">注射点1</option>    
                    <option value="注射点2">注射点2</option>    
                    <option value="注射点3">注射点3</option>    
                    <option value="注射点4">注射点4</option>    
                </select><br/>
                想查找哪一天：<DatePicker/><br/>
                <h4>输出这天该注射点的剩余疫苗量：</h4><br/>
                <hr/>
                <h3>查询某天各注射点的剩余疫苗数量</h3><br/>
                想查找哪一天：<DatePicker/><br/>
                输出这天所有注射点的剩余疫苗量：<br/>
                注射点1：{store.getState()}<br/>
                注射点2：{store.getState()}<br/>
                注射点3：{store.getState()}<br/>
                注射点4：{store.getState()}
            </div>
        )
    }
}

// export default connect(

// )(Find_vaccine)