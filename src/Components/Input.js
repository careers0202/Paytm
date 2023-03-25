import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <label>*First Name</label>
                <input type="text" placeholder="Enter Name" />
            </div>
        )
    }
}

export default Input;