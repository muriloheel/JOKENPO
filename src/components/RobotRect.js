import React from 'react'
import PlayerArc from './PlayerArc'
import Computer from './computer'
import Pedra from './pedra'
import Papel from './papel'
import Tesoura from './tesoura'
function RobotRect(props) {

    return (
        <div style={{
            width:'25vw',
            height:'100vh',
            backgroundColor:props.color,
            boxShadow: '10px 10px 50px yellow',
        }} >
            <PlayerArc boxShadow={'-13px 9px 5px darkRed'} source ={<Computer/>} background={'white'} width={'160px'} height ={'160px'}
            top ={'50px'} left ={'80px'}
            />

            <h1 style={{
                position:'relative',
                fontSize: '30px',
                color: 'black',
                top: '40px',
                left: '90px',
                fontFamily: 'MV Boli',
            }}> ---...---</h1>

            <PlayerArc boxShadow={'-13px 9px 5px darkRed'} source ={<Pedra top={0} left={0} width={'100px'} height ={'100px'}/>} background={'#00f'} width={'100px'} height ={'100px'}
            top ={'40px'} left ={'110px'}
            />

            <PlayerArc boxShadow={'-13px 9px 5px darkRed'} source ={<Papel top={'10px'} left={'20px'} width={'60px'} height ={'70px'}/>} background={'#fff'} width={'100px'} height ={'100px'}
            top ={'50px'} left ={'110px'}
            />

            <PlayerArc boxShadow={'-13px 9px 5px darkRed'} source ={<Tesoura top={'10px'} left={'20px'} width={'60px'} height ={'70px'}/>} background={'#0f0'} width={'100px'} height ={'100px'}
            top ={'60px'} left ={'110px'}
            />


        </div>
    )
}

export default RobotRect
