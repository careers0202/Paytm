import React, { Component, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

import './BusList.css';

// export default class BusList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             busList: [],
//             msg: ''
//         }
//     }

//     componentDidMount() {
//         const { source, destination } = this.props.match.params;
//         axios.get(`http://localhost:8081/list/${source}/${destination}`)
//             .then(resp => {
//                 this.setState({
//                     busList: resp.data,
//                 })
//             })
//     }

//     handleBook = async (bus) => {
//         const cookies = new Cookies();
//         const resp = await axios.post('http://localhost:8081/book', {
//             headers: {
//                 token: cookies.get('authToken')
//             },// synchronus
//             body: bus  // payload
//         })
//         this.setState({ msg: resp.data.msg });
//         console.log('hello');
//     }

//     render() {
//         const { busList, msg } = this.state;
//         console.log('busList', busList)
//         const { source, destination } = this.props.match.params
//         return (
//             <div>
//                 <h2 className='mt-3'>{`available buses from ${source} to ${destination}`}</h2>
//                 {msg ? <h2 className='text-success mt-3'>{msg}</h2> : ''}
//                 <div>
//                     {busList.map((bus) => {
//                         return (
//                             <div className='bus-item py-3'>
//                                 <h3>{bus.type}</h3>
//                                 <p>{bus.time}</p>
//                                 <b>Price:{bus.price}</b>
//                                 <button type="text" onClick={() => this.handleBook(bus)}>Book Now</button>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }

export default function BusList() {
    const [msg, setMsg] = useState('');
    const [busList, setList] = useState([]);
    const { source, destination } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8081/list/${source}/${destination}`)
            .then(resp => {
                setList(resp.data);
                // setMsg(resp.data.msg);
            })

    }, []) // componentDidMount

    useEffect(() => {
        // componentDidUpdate
    }, [msg])

    useEffect(() => {

        return () => {
            // componentWillUnmount
        }
    }, []);

    const handleBook = async (bus) => {
        const cookies = new Cookies();
        const resp = await axios.post('http://localhost:8081/book', {
            headers: {
                token: cookies.get('authToken')
            },
            body: bus
        })
        setMsg(resp.data.msg);
    }

    return (
        <div>
            <h2 className='mt-3'>{`available buses from ${source} to ${destination}`}</h2>
            {msg ? <h2 className='text-success mt-3'>{msg}</h2> : ''}
            <div>
                {busList.map((bus) => {
                    return (
                        <div className='bus-item py-3'>
                            <h3>{bus.type}</h3>
                            <p>{bus.time}</p>
                            <b>Price:{bus.price}</b>
                            <button type="text" onClick={() => handleBook(bus)}>Book Now</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

