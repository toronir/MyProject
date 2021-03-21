import React from "react";
import Preloader from "../../common/Preloader/Preloader";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>;
        }

        return (            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
                <div>
                    UserName: {this.props.profile.fullName}
                </div>
                <div>
                    Status: {this.props.profile.aboutMe}
                </div>
                <div>
                Looking for a job: {!this.props.profile.lookingForAJob
                    ? "Yes"
                    : "No"}
                </div>
            </div>
        );
    }
};
export default ProfileStatus;
