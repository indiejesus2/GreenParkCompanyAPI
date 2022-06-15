import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'

const Logo = props => {

    const history = useHistory()

    const [home] = useState(
        history.location.pathname.includes("contractor") ? '/contractors' : '/employees'
    )

    const handleHome = () => {
        if (history.location.pathname.includes("contractor")) {
            return (
                '/contractors'
            )
        } else if (history.location.pathname.includes("employees")) {
            return (
                '/employees'
            )
        } else {
            return (
                '/'
            )
        }
    }

    return (
        <div className="nav-og">
            <div className="nav-sign"
                // style={{
                //     position: "relative",
                //     bottom: 4 + "rem"
                // }}
            >
                <span className="logo">
                    <Link to={handleHome()}>
                        <img src="/images/blucollar-logo-non-bold.png" alt="Logo" />
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Logo