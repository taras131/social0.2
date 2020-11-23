import React from "react";

class MyStatus extends React.Component {
    state = {
        editMode: false
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    diactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    render() {
        return(
            <div>
                {!this.state.editMode&&
                <div>
                    <span onDoubleClick = {this.activeEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode&&
                <div>
                    <input autoFocus={true} onBlur = {this.diactivateEditMode} value = {this.props.status}/>
                </div>
                }
            </div>
        )
    }

}

export default MyStatus;