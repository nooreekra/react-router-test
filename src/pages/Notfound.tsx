import React from "react";
import { Link } from 'react-router-dom';
export function Notfound() {


    return (
        <div>
            This page doesn't exist. Go <Link to="/">Home</Link>
        </div>
    )
}