import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './BusList/BusList.css';

export default class MyBookings extends Component {
    constructor() {
        super();
        this.state = {
            bookings: [],
            isModalOpen: false,
            number: '',
            bookingID: ''
        }
    }

    async componentDidMount() {
        const cookies = new Cookies();
        const resp = await axios.get('http://localhost:8081/mybookings', {
            headers: {
                token: cookies.get('authToken')
            }
        }) // authenticated API

        this.setState({
            bookings: resp.data
        })

        console.log('bookings', resp)
    }

    async handleDelete(bookingid) {
        const resp = await axios.delete(`http://localhost:8081/ticketdelete/${bookingid}`);
        console.log('resp', resp);
        this.setState({
            bookings: resp.data.data
        })
    }

    handleEdit(bookingId) {
        this.setState({
            isModalOpen: true,
            bookingID: bookingId
        })
    }

    handleCancel() {
        this.setState({
            isModalOpen: false
        })
    }

    handleChange(e) {
        this.setState({
            number: e.target.value
        })
    }

    async handleUpdate() {
        const resp = await axios.put(`http://localhost:8081/ticketupdate/${this.state.bookingID}`, {
            number: this.state.number
        })
        this.setState({
            isModalOpen: false
        })
        console.log('update', resp)
    }

    render() {
        const { bookings, isModalOpen } = this.state;
        return (
            <div>
                <div>
                    {bookings.map((bus) => {
                        return (
                            <div className='bus-item py-3'>
                                <h3>{bus.type}</h3>
                                <p>{bus.time}</p>
                                <b>Price:{bus.price}</b>
                                <span onClick={() => this.handleEdit(bus.bookingid)}>
                                    <i class="fas fa-pen"></i>
                                </span>
                                <button
                                    className="btn btn-danger"
                                    type="text"
                                    onClick={() => this.handleDelete(bus.bookingid)}
                                >
                                    Cancel Ticket
                                </button>
                            </div>
                        )
                    })}
                </div>
                <Modal isOpen={isModalOpen}>
                    <ModalHeader>Update Info!</ModalHeader>
                    <ModalBody>
                        <input type="text"
                            placeholder='Enter mobile number'
                            onChange={(e) => this.handleChange(e)} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleUpdate()}>
                            Update
                        </Button>{' '}
                        <Button color="secondary" onClick={() => this.handleCancel()}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
