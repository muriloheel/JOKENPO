import React from 'react'

function Pedra(props) {
    return (
        <div>
             <img width={props.width} height={props.height} src='/imgs/rock.png' alt='robot'style={{
                position: 'relative',
                top: props.top,
                left: props.top,
            }}></img>
        </div>
    )
}

export default Pedra
