import React from 'react'
import "./Button.css"

export default function Button(props) {
    return (
        <div>
            <button data-testid="button" className="Button-style">hid {props.person}</button>
        </div>
    ) // use data-testid to test instead of ids
}
