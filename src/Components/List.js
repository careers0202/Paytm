import React, { Component } from 'react'

// class List extends Component {
//     render() {
//         const { carsdata } = this.props;
//         return (
//             <div>
//                 {carsdata.map((item, index) => {
//                     return (
//                         <div className="car-item" key={index}>
//                             <p>Car name:{item.name}</p>
//                             <p>Price:{item.price}</p>
//                         </div>)
//                 })}
//             </div>
//         )
//     }
// }

function List(props) {
    const { carsdata, handleCheckBox } = props;
    return (
        <div>
            {carsdata.map((item, index) => {
                return (
                    <div className="car-item" key={index}>
                        <input type="checkbox" onChange={(event) => handleCheckBox(event, item)} />
                        {item.completed ? <strike>{item.name}</strike> : <span>{item.name}</span>}
                    </div>)
            })}
        </div>
    )
}

export default List;
