import React, { Component } from 'react'

export default class Find_cancel_break extends Component {
    render() {
        return (
            <div>
                系统发现您取消了疫苗注射预约，以下是您的取消记录：<br/>
                姓名：<br/>
                身份证号：<br/>
                取消的注射时间段：<br/>
                取消的预约注射点：<br/>
                已失效的预约号：<br/>

                <hr />
                
                您没有在规定的时间和地点注射好疫苗，以下是您的爽约记录：<br/>
                姓名：<br/>
                身份证号：<br/>
                错过的注射时间段：<br/>
                错过的预约注射点：<br/>
                已失效的预约号：<br/>
            </div>
        )
    }
}
