import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Home.scss'

class Home extends Component {

    constructor() {
        super();
        this.state = {
            source: '',
            destination: '',
            date: '',
            hasError: false
        }
        console.log('initial phase ---> constrcutcor')
    }

    // componentWillMount() {
    //     console.log('mounting phase ----> componentWillMount')
    // }

    componentDidMount() {
        // API calls
        console.log('mounting phase ----> componentDidMount')
        this.count = 0
        this.timer = setInterval(() => {
            this.count = this.count + 1
        }, 1000)
    }


    // componentWillUpdate() {
    //     console.log('updating phase ----> componentWillUpdate')
    // }

    // shouldComponentUpdate() {
    //     return false;
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('updating phase ----> componentDidUpdate')
        // console.log(this.state.source, prevState.source)
        // if (this.state.source === 'pune') {
        //     alert('pune bussus not available')
        // }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log('unmounting phase ---> componentWillUnmount', 'time spent', this.timer)
    }

    handledata(event, type) {
        console.log('type', type)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        // to stop form default behaviour
        // const history = useHistory()
        event.preventDefault();
        const { source, destination, date } = this.state;

        if (source && destination && date) {
            console.log('came inside')
            this.props.history.push(`/bus/search/${source}/${destination}/${date}`);
        } else {
            this.setState({
                hasError: true
            })
        }

    }



    render() {
        const { source, destination, date, hasError } = this.state;
        console.log('render called')
        return (
            <div>
                <div id="keynote">
                    <b>No Wallet KYC Required</b>
                    &#128522;
                    <span>to pay using UPI on Paytm</span>
                    <b>Learn more.</b>
                </div>
                <section className="reacharge-section">
                    <div>
                        {/* <i className="fa-solid fa-mobile-screen"></i> */}
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA4CAYAAABez76GAAAAAXNSR0IArs4c6QAAAzlJREFUaAXtm0trFEEQx2cSjTE+Ynwhvg65KREk+MCDkIOiFxXBm4ge9CQoCN6ieBHxpn4DwU/gTSPkJL6QgKIielEjehAUo4muuu2vZCb0LpupHe3ZHaEK/unqru6qmv/WTm+gO44KEOfcIG7PgM1gFXB1oNvUmKwTyVr/Dvt9cCGO45cyudQCOYdBBbRaJgi4OzQ5cUiHJLgWf0/A/JB+c/gaZ+46KulLjjWZUzsyrfmNR1mSkjOG3k+y8iFInE4wC8xO0EU7B3SDuQl6aOcB8bEALEzQS7sI9IHFCZbQLgVbwWsgshrs/6OV8Q8VdN37Xh1pVY7EPO/FvRgyrnyiIWWl5+yxp2eqPNwBJmysm/SB/mUKMH1R15lrus+8nmwKwSQ0QX+b2GkWbqlb/Jn+VfCxbrxRtxkSG61Tx8pC0DYylXeRLxWq56c/0A69FARBRJWHn2wHAVrM0LuYFu+/sxtBykdmBBlBCgOK2SrICFIYUMxWQUaQwoBitgoyghQGFLNVkBGkMKCYrYKMIIUBxWwVZAQpDChmqyAjSGFAMVsFGUEKA4rZKsgIUhhQzFZBRpDCgGK2CjKCFAYUs1WQEaQwoJitgowghQHFbBVkBCkMKOYiD1D1cfZwWUZ87QhyHrucgC1EiiRopJCMW+zU3kEK4UVW0Cdi/1Dia6dTm7XLQXQ5bB5ciiRoB4czHwbPuIFD3nUHGb7WwPTPQ0USlD+5kakhLvZsYOGDaGfP3fwOwq8ozzvo5uSlqFodjaruCrgT3ZgaDv+4+T2Wg6Bb3/oj507Wpu/ORaOusO27NtbMvXIQ5Jx/xyPJ1nE7qLJi5tRbYykHQdXuMR73fe0jc3twqOtF7Vjre6EJGvceYb2nZ6u74q9RHO1hErte/D2K49tRR+de2l/ZC6etfiy5ohlMQu9ij8hsX5LdCbZf2eYl4fT3jLQpZFqqS/sUbPfGsDq5dJfOQZ3WZQz+YkK4AdRD0k9Ecggm2v87uQKR7BoWyN0tuTXYDnlLULmSOREqeNCvGIm9IbHjoBIqwRx+5LbQsZDkSOygFZQ+DJU0iH4KbALLgcRJY6V6qP4rfN8DZyHnOW1Q+Q2TZjaJCCu8RQAAAABJRU5ErkJggg=="
                            height="24" alt="" />
                        <Link to="/recharge"><p>Mobile</p></Link>
                    </div>
                    <div>
                        <img src="data:image/png;base64,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"
                            height="24" />
                        <Link to="/electricity-bill-payment"><p>Electricity</p></Link>
                    </div>
                    <div>
                        <img src="data:image/png;base64,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"
                            height="24" />
                        <Link to="/dth-recharge"><p>DTH</p></Link>
                    </div>
                    <div>
                        <img src="data:image/png;base64,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"
                            height="24" />
                        <p>Fees</p>
                    </div>

                </section>
                <div className='container'>
                    <div className="bookingform">
                        <div className="nav-tabs">
                            <div>
                                <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/b2411b61.svg" />
                                <span>Flights</span>
                            </div>
                            <div>
                                <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/21b54170.svg" />
                                <span>Bus</span>
                            </div>
                            <div>
                                <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/05113c67.svg" />
                                <span>Trains</span>
                            </div>
                            <div>
                                <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/75b4ed82.svg" height="18" />
                                <span>International Flights</span>
                            </div>
                        </div>
                        <div>
                            <h3>Book Flight Tickets</h3>
                            <input type="radio" checked />
                            <label>One Way</label>
                            <input type="radio" />
                            <label>Round trip</label>
                        </div>
                        <form className="inputContainer" onSubmit={(event) => this.handleSubmit(event)}>
                            <div>
                                <input type="text" placeholder="Source" name="source" onChange={(event) => this.handledata(event)} />
                                {!source && hasError ? <p className='error'>Please enter origin city</p> : ''}
                            </div>

                            <div className="tripChange">
                                <img src="	https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/cce6cd0a.svg" alt="tripchange"
                                    width="15px" />
                            </div>
                            <div>
                                <input type="text" placeholder="Destination" name="destination" onChange={(event) => this.handledata(event)} />
                                {!destination && hasError ? <p className='error'>Please enter destination city</p> : ''}
                            </div>
                            <div>
                                <input type="date" name="date" onChange={(event) => this.handledata(event)} />
                                {!date && hasError ? <p className='error'>Please enter date</p> : ''}
                            </div>

                            <input type="date" />
                            <input type="submit" className="searchBtn" value="Search" />
                        </form>

                    </div>

                    <h3 className="stickyNote mt-4">paytm always offers besrt prices: promocode- Paytmfirst paytm always offers besrt prices:
                        promocode- Paytmfirst</h3>
                    <section className="offerSection">
                        <h2>Offers</h2>
                        <div>
                            <div>
                                <img src="https://d1n7hp6p5z9boa.cloudfront.net/Marketing/Anirban/WELCOMEFLIGHT_Web+Carousel+(1).jpg"
                                    alt="offer1" width="300" height="150" />
                                <b>Use promocode : WELCOMEFLIGHT</b>
                            </div>
                            <div>
                                <img src="https://d1n7hp6p5z9boa.cloudfront.net/Marketing/Anirban/FLYMORE_Web+Carousel.jpg" alt="offer1"
                                    width="300" height="150" />
                                <b>Use promocode : WELCOMEFLIGHT</b>
                            </div>
                            <div>
                                <img src="https://d1n7hp6p5z9boa.cloudfront.net/Marketing/Anirban/FLY200_Web+Carousel.jpg" alt="offer1"
                                    width="300" height="150" />
                                <b>Use promocode : WELCOMEFLIGHT</b>
                            </div>
                            <div>
                                <img src="https://d1n7hp6p5z9boa.cloudfront.net/Marketing/Anirban/WELCOMEFLIGHT_Web+Carousel+(1).jpg"
                                    alt="offer1" width="300" height="150" />
                                <b>Use promocode : WELCOMEFLIGHT</b>
                            </div>
                            <div>
                                <img src="https://d1n7hp6p5z9boa.cloudfront.net/Marketing/Anirban/FLYMORE_Web+Carousel.jpg" alt="offer1"
                                    width="300" height="150" />
                                <b>Use promocode : WELCOMEFLIGHT</b>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div>
                            <h2>Book Bus Tickets with Paytm</h2>
                            <p id="guidelines">now,
                                <b>book your bus tickets</b> on Paytm and make your bus booking experience smoother and more
                                affordable.
                                Paytm
                                <a href="https://paytm.com/digitalgold">link</a>
                                allows you to <b>book ticket with paytm</b> from anywhere in India at the lowest price.

                                To book your bus tickets on Paytm, just fill in the requisite information in the required fields and
                                customise
                                your trip. Paytm gives you the privilege to plan your trip on your own. We provide you an array of
                                options
                                for
                                your travel. You can choose sleeper, semi-sleeper, AC/non-AC, or any other type of bus you prefer,
                                for
                                your
                                trip. You can search for availability of the bus by entering the time and date of the ticket
                                reservation. We
                                also facilitate you to choose the seat you want from all available seats in the bus.

                                Thanks to our autofill function, you don’t have to enter your details while doing your bookings
                                again.
                                Advanced
                                traveller details prediction will prompt profile information based on your past ticket reservation
                                history.
                            </p>
                        </div>
                        <div>
                            <h2>Easy Booking and Payment Options</h2>
                            <p>Paytm ensures smooth payment experience for the users by making wallet payment secure and quicker. On
                                Paytm,
                                you
                                can book your bus tickets in less than a minute without any hassle. Make sure that you have enough
                                balance
                                in
                                your Paytm wallet, as it helps you in faster checkout. Having a registered Paytm wallet can also
                                offer
                                you
                                loads
                                of benefits.

                                You also get the ease of selecting from other payment options like Debit/Credit Card or Net Banking.
                                In
                                case
                                of
                                failed booking, your money is refunded back to your wallet in less than 15 minutes. For any
                                assistance,
                                you
                                can
                                visit our dedicated 24/7 helpline service on <a href="http://m.p-y.tm/hlpsprt"
                                    target="_blank">http://m.p-y.tm/hlpsprt</a> for helpline numbers and any
                                kind
                                of
                                customer support. So, skip the long queues at the bus booking counters now and book tickets on
                                Paytm,
                                from
                                the
                                comfort of your home.</p>
                        </div>
                        <div>
                            <h2>Why Make Bus Reservations With Paytm</h2>
                            <p>Paytm has an edge over the other online bus ticket booking platforms in India as we keep implementing
                                new
                                features keeping in mind the behaviour of our users and the common bus passenger. From Non-AC buses
                                to
                                Volvo
                                AC
                                buses and other luxury buses, you can book all types of bus tickets on Paytm.</p>

                            <ol>
                                <li>Free Cancellation </li>
                                <li>Instant Refunds </li>
                                <li>Easy & Quick Bus Booking</li>
                            </ol>
                        </div>
                    </section>
                    <section>
                        <h2>FAQs Related To Bus Ticket Booking With Paytm</h2>
                    </section>
                    <div className="chatbot">
                        <img src="https://static.abhibus.com/chatbot/chat-pop.png" />
                    </div>
                </div>
                <footer>
                    <div>
                        <h4>Be Safe. Be Vilgilant</h4>
                        <p>Please do not share your Paytm Wallet password, Credit/Debit card pin, other confidential information
                            with anyone even if he/she claims to be from Paytm. We advise our customers to completely ignore such
                            communications & report to us at cybercell@paytmbank.com</p>
                    </div>
                    <div>
                        <h4>Be Safe. Be Vilgilant</h4>
                        <p>Please do not share your Paytm Wallet password, Credit/Debit card pin, other confidential information
                            with anyone even if he/she claims to be from Paytm. We advise our customers to completely ignore such
                            communications & report to us at cybercell@paytmbank.com</p>
                    </div>
                    <div>
                        <h4>Be Safe. Be Vilgilant</h4>
                        <p>Please do not share your Paytm Wallet password, Credit/Debit card pin, other confidential information
                            with anyone even if he/she claims to be from Paytm. We advise our customers to completely ignore such
                            communications & report to us at cybercell@paytmbank.com</p>
                    </div>
                    <div>
                        <h4>Be Safe. Be Vilgilant</h4>
                        <p>Please do not share your Paytm Wallet password, Credit/Debit card pin, other confidential information
                            with anyone even if he/she claims to be from Paytm. We advise our customers to completely ignore such
                            communications & report to us at cybercell@paytmbank.com</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default withRouter(Home);
