import React, { Component } from 'react'
import List from './List';

class Output extends Component {
    render() {
        const { name, countdata } = this.props;
        return (
            <div>
                {/* <h3>{name}</h3> */}
                <h3>Output:{countdata}</h3>
                <List carsdata={[]} />
            </div>
        )
    }
}

export default Output;

