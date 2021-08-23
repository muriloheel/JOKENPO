import React from 'react'
import PlayerArc from './PlayerArc'
import Human from './human'
import Pedra from './pedra'
import Papel from './papel'
import Tesoura from './tesoura'


 function PlayerRect(props) {
    return(
        <div style={{
            width:'25vw',
            height:'100vh',
            backgroundColor:props.color,
            boxShadow: '-30px 10px 30px green',
        }} >
            <PlayerArc boxShadow={'-15px 10px 5px #666666'} source ={<Human/>} background={'#444'} width={'160px'} height ={'160px'}
            top ={'50px'} left ={'80px'}
            />
            <h1 style={{
                position:'relative',
                fontSize: '30px',
                color: 'black',
                top: '-180px',
                left: '100px',
                fontFamily: 'MV Boli',
            }}>YOU:</h1>

            <PlayerArc boxShadow={'-15px 10px 5px #666666'} source ={<Pedra top={0} left={0} width={'100px'} height ={'100px'}/>} background={null} width={'100px'} height ={'100px'}
            top ={'40px'} left ={'110px'}
            />
            <PlayerArc boxShadow={'-15px 10px 5px #666666'} source ={<Papel top={'10px'} left={'20px'} width={'60px'} height ={'70px'}/>} background={null} width={'100px'} height ={'100px'}
            top ={'50px'} left ={'110px'}
            />
            <PlayerArc boxShadow={'-15px 10px 5px #666666'} source ={<Tesoura top={'10px'} left={'20px'} width={'60px'} height ={'70px'}/>} background={null} width={'100px'} height ={'100px'}
            top ={'60px'} left ={'110px'}
            />
        </div>
    )
}

export default PlayerRect
