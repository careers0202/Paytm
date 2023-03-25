import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import BusList from './Components/BusList/BusList'
import DTH from './Components/DTH'
import Header from './Components/Header'
import Home from './Components/Home/Home'
import Pagenotfound from './Components/Pagenotfound'
import Recharge from './Components/Recharge';
import Login from './Components/Login/Login';
import MyBookings from './Components/MyBookings'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/bus-tickets" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/bookings" component={MyBookings} />
                        <Route path="/recharge" component={Recharge} />
                        <Route path="/dth-recharge" component={DTH} />
                        <Route path="/404" component={Pagenotfound} />
                        <Route path="/bus/search/:source/:destination/:date" component={BusList} /> {/* :source --- routeParams */}
                        <Redirect to="/404" />
                    </Switch>
                </Router>
            </div>
        )
    }
}
