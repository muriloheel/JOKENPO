import React from 'react'

function Papel(props) {
    return (
        <div>
             <img width={props.width} height={props.height} src='/imgs/paper.png' alt='robot'style={{
                position: 'relative',
                top: props.top,
                left: props.left,
            }}></img>
        </div>
    )
}

export default Papel