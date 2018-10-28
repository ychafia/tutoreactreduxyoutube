import React, { Component } from 'react';

class SideBar extends Component {
    state = {
        user: {
            avatar: "https://fr.gravatar.com/userimage/147013530/317f57eaed8376f5e039ad60b57c7a08.jpg",
            name: "Youness"
        }
    }
    render() {
        return (
            <div>
                <p className="sidebar">
                    {this.state.user.name}  &nbsp; &nbsp;
                    <img
                        className={"user-avatar small"}
                        alt="user avatar"
                        src={this.state.user.avatar}
                    />
                </p>
            </div>
        )
    }
}

export default SideBar;