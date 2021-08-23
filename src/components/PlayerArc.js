import React from 'react'
import Computer from './computer'
import './Arc.css'
function PlayerArc(props) {
        return (
            <div className = "arc" style={{
                position:'relative',
                top: props.top,
                left:props.left,
                width: props.width,
                height:props.height,
                borderRadius:'50%',
                backgroundColor: props.background,
                border: '2px solid black',
                boxShadow: props.boxShadow,            
            }}>
              {props.source}
              </div>
        )
}



export default PlayerArc


