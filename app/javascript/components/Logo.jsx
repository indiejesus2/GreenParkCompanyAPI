import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'

const Logo = props => {

    const history = useHistory()

    const [home] = useState(
        history.location.pathname.includes("contractor") ? '/contractors' : '/employees'
    )

    return (
        <div className="nav-og">
            <div className="nav-sign"
                // style={{
                //     position: "relative",
                //     bottom: 4 + "rem"
                // }}
            >
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