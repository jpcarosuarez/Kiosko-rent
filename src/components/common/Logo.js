import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/logo.css';

export default function Logo({url, className}) {
    return (
        <>
            <Link to="/" className={className}>
                <h1> KiosKo</h1>
            </Link>
        </>
    )
}
