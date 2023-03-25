import React, { Component } from 'react'

export default class Count extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={() => this.props.handleClick('inc')}>Increment</button>
                <button type="button" onClick={() => this.props.handleClick('dec')}>Decrement</button>
            </div>
        )
    }
}
