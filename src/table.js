import React from "react";
import ReactDom from "react-dom";

import Btn from "./btn.js";
class Table extends React.Component {
    // 默认
    static defaultProps = {
        price: "0",
        num: "0",
        subtotal: "0",
    }

    constructor(props) {
        super(props)
        // 初始数据状态
        this.state = {
            bname: "ipad",
            price: "6000",
            num: "1",
            subtotal: "0",
        }
    }

    render() {
        return (
            <tr>
                <td>{this.state.bname}</td>
                <td>{this.state.price}</td>
                <td>
                    <Btn iconame="-" clickNum={this.downNum.bind(this)} />
                    {this.state.num}
                    <Btn iconame="+" clickNum={this.addNum.bind(this)} />
                </td>
                <td>{this.state.price * this.state.num} </td>
                <td onClick={this.removeBtn.bind(this)}>删除</td>
            </tr>)
    }

    removeBtn() {
        this.setState({
        })
        console.log(this.setState)
    }

    // 减少数量
    downNum() {
        this.setState({
            num: --this.state.num
        })
    }

    // 添加数量
    addNum() {
        this.setState({
            num: ++this.state.num
        })
    }

}

export default Table;