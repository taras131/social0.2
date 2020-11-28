import React from "react";

class MyStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    diactivateEditMode = (e) => {
        this.setState({
            editMode: false
        })
        this.props.updateMyStatus(this.state.status);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.status != this.props.status){
           this.setState({status: this.props.status})
       }
    }
    render() {
        return(
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick = {this.activeEditMode}>{this.state.status
                    ? this.state.status
                    :"Ведите Ваш статус здесь"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}  autoFocus={true} onBlur = {this.diactivateEditMode} value = {this.state.status}/>
                </div>
                }
            </div>
        )
    }

}

export default MyStatus;