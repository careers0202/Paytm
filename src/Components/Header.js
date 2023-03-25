import React from 'react'
import { Link } from 'react-router-dom';

import paytmLogo from '../images/paytm_logo.png';

export default function Header() {
    return (
        <div>
            <header>
                {/* <img src="https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png"/> */}
                <Link to="/"><img src={paytmLogo} width="180px" alt="paytmlogo" /></Link>

                <nav>
                    <b>Paytm for Consumer</b>
                    <b>Paytm For Business</b>
                    <b>Investor Relations</b>
                    <b>Company</b>
                    <b>Career</b>
                    <b><Link to="/bookings">My Bookings</Link></b>
                </nav>
                <Link to="/login"><div className="loginBtn">
                    <span>Sign in</span>
                    <img src="https://drg5ie3bz46tr.cloudfront.net/travel/loginImg.svg" alt="login logo" />
                </div>
                </Link>

            </header >
        </div >
    )
}
