import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    statusInput = React.createRef()

    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>
                    {(this.props.status === null || this.props.status === "") ?
                        <div>{"Введите статус"}</div> :
                        <div>{this.props.status}</div>}
                </span>
            </div>}
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
            </div>}
        </div>
    }
}

export default ProfileStatus