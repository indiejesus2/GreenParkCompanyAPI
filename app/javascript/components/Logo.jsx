import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Logo = props => {

    const [home] = useState(
        props.user == "contractor" ? '/contractors' : '/employees'
    )

    return (
        <div className="nav-og">
            <div className="nav-sign">
                <span className="logo">
                    <Link to={home}>
                        <img src="/images/blucollar-logo-non-bold.png" alt="Logo" />
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Logo