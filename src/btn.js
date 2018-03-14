import React from "react";
import ReactDom from "react-dom";

class Btn extends React.Component {

    render() {
        return (<button onClick={this.changeNumBtn.bind(this)} >{this.props.iconame}</button>)
    }
    changeNumBtn(){
        this.props.clickNum();
    }

}
export default Btn;