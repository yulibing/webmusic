import React from "react";
import ReactDom from "react-dom";

import Table from "./table.js";
import Bottom from "./bottom.js";
import "../css/index.css";

var state = {
    bname: "ipad",
    price: "6000",
    num: "1",
    subtotal: "0",
}

ReactDom.render((
    <div>
        <div className="box">
            <table>
                <thead>
                    <tr>
                        <td>商品名</td>
                        <td>单价</td>
                        <td>数量</td>
                        <td>小计</td>
                    </tr>
                </thead>
                <tbody>
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                </tbody>
            </table>
        </div>
        <Bottom botName="总数量：" onMouseLeave={this.allNum} />
        <Bottom botName="总价格：" onMouseLeave={this.allPrice} />
    </div>
), add)

function allNum() {
    console.log(12)
}

function allPrice() {
    allPrices: state.price
}