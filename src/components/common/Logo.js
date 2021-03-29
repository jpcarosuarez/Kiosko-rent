import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({url, className}) {
    return (
        <>
            <Link to="/" className={className}>
                <h1> Kiosko </h1>
            </Link>
        </>
    )
}
