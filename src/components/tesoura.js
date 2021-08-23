import React from 'react'

function Tesoura(props) {
    return (
        <div>
             <img width={props.width} height={props.height} src='/imgs/scissors3.png' alt='robot'style={{
                position: 'relative',
                top: props.top,
                left: props.left,
            }}></img>
        </div>
    )
}

export default Tesoura