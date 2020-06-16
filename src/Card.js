import React from 'react'
import './Cards.css'

function Card(props) {
    return (
        <div className='cards' onClick={props.turnCards} index={props.index}>
            {props.content}
        </div>
    )
}

export default Card
