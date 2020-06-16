import React from 'react'
import './Display.css'
import StatusDisp from './StatusDisp'

function Display(props) {
    return (
        <div className='display'>
            <StatusDisp >{props.text}</StatusDisp>
            <button onClick={props.shuffle} disabled={props.start}>Start</button>
        </div>
    )
}

export default Display
