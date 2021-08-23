import React,{useState, useEffect} from 'react'
import PlayerArc from './PlayerArc'
import Tittle from './Tittle'
import './button.css'
import Papel from './papel'
import Pedra from './pedra'
import Tesoura from './tesoura'
function Rect() {
    let random = Math.random()
    const[hBackground, setHBackground]=useState('white')
    const[cBackground, setCBackground]=useState('white')
    const[hShadow,setHShadow] = useState('')
    const[cShadow,setCShadow] = useState('')
    const[choice,setChoice] = useState(null)
    const[choiceT,setChoiceT] = useState(null)
    const[humanS,setHumanS] = useState(0)
    const[robotS,setRobotS] = useState(0)
    const handleSelection = (event)=>{
        handleComputerChoiceT()
        if(event.target.value==='rock'){
            setChoice(<Pedra top={'5px'} left={'15px'} width={'120px'} height ={'120px'}/>)
            setChoiceT('pedra')
        }
        else if(event.target.value==='paper'){
            setChoice(<Papel top={'10px'} left={'20px'} width={'90px'} height ={'100px'}/>)
            setChoiceT('papel')
        }
        else if(event.target.value==='scissors'){
            setChoice(<Tesoura top={'13px'} left={'20px'} width={'90px'} height ={'100px'}/>)
            setChoiceT('tesoura')
        }
        else{
            setChoice("")
            setChoiceT("")
        }
    }
    const [computerChoice,setComputerChoice] = useState(null)
    const [computerChoiceT,setComputerChoiceT] = useState(null)

    const handleComputerChoice = ()=>{
        if(computerChoiceT === 'pedra'){
            setComputerChoice(<Pedra top={'5px'} left={'15px'} width={'120px'} height ={'120px'}/>)
        }
        else if (computerChoiceT === 'papel'){
            setComputerChoice(<Papel top={'10px'} left={'20px'} width={'90px'} height ={'100px'}/>)
        }
        else if(computerChoiceT === 'tesoura'){
            setComputerChoice(<Tesoura top={'13px'} left={'20px'} width={'90px'} height ={'100px'}/>)
        }
        console.log(choiceT,computerChoiceT)
    }
    const handleComputerChoiceT = ()=>{
        if(random < 0.333){
            setComputerChoiceT('pedra')
        }
        else if (random > 0.333 && random < 0.666){
            setComputerChoiceT('papel')
        }
        else if(random > 0.666){
            setComputerChoiceT('tesoura')
        }
    }
    const [message,setMessage] = useState(null)
    const handleMessage = ()=>{
        if(choiceT === 'papel' && computerChoiceT === 'pedra'){
            setMessage("Você Ganhou!")
            setHBackground('#0ff')
            setHShadow('-15px 10px 5px darkGreen')
            setHumanS(humanS + 1)
        }
        else if(choiceT === 'papel' && computerChoiceT === 'tesoura'){
            setMessage("Você Perdeu")
            setCBackground('brown')
            setCShadow('-15px 10px 5px darkRed')
            setRobotS(robotS + 1)
        }
        else if(choiceT === 'pedra' && computerChoiceT === 'tesoura'){
            setMessage("Você Ganhou!")
            setHBackground('#0ff')
            setHShadow('-15px 10px 5px darkGreen')
            setHumanS(humanS+1)
        }
        else if(choiceT === 'pedra' && computerChoiceT === 'papel'){
            setMessage("Você Perdeu")
            setCBackground('brown')
            setCShadow('-15px 10px 5px darkRed')
            setRobotS(robotS + 1)
        }
        else if(choiceT === 'tesoura' && computerChoiceT === 'papel'){
            setMessage("Você Ganhou!")
            setHBackground('#0ff')
            setHShadow('-15px 10px 5px darkGreen')
            setHumanS(humanS+1)
        }
        else if(choiceT === 'tesoura' && computerChoiceT === 'pedra'){
            setMessage("Você Perdeu")
            setCBackground('brown')
            setCShadow('-15px 10px 5px darkRed')
            setRobotS(robotS + 1)
        }
        else if(choiceT === computerChoiceT){
            setMessage("Empate!")
            setCBackground('pink')
            setCShadow('-15px 10px 5px darkRed')
            setHBackground('pink')
            setHShadow('-15px 10px 5px darkGreen')
        }
    }
    const handleGo = ()=>{
        handleComputerChoiceT()
        handleComputerChoice()
        handleMessage()
    }
    return (
        <div style={{
            width:'50vw',
            height:'100vh',
            background:'linear-gradient(to left,black,purple)',
            display: 'grid',
        }}>
            <Tittle/>
            <PlayerArc boxShadow={hShadow} source ={choice} background={hBackground} width={'130px'} height ={'130px'}
            top ={'160px'} left ={'40px'}
            />
            <h1 style={{
                 position: 'absolute',
                 left: '30vw',
                 bottom: '55vh',
                 color:'white',
                 fontSize: '100px'
             }}> {message} </h1>
            
             <h1 style={{
                 position: 'relative',
                 left: '19vw',
                 bottom: '50px',
                 color:'white',
                 fontSize: '120px',
                 textShadow: '0px 10px 10px yellow', 
                 boxShadow: '0px 12px 15px yellow',
                 width: '150px',
                 border: '1px solid black'
             }}> VS </h1>

           <PlayerArc boxShadow={cShadow} source ={computerChoice} background={cBackground} width={'130px'} height ={'130px'}
            top ={'-275px'} left ={'37vw'}
            />
            <button className="go" onClick ={handleGo}>GO</button>
            <button className="reset" onClick = {function(){
                 setComputerChoice(null)
                 setChoice(null)
                 setMessage(null)
                 setComputerChoiceT(null)
                 setChoiceT(null)
                 setCBackground('white')
                 setHBackground('white')
                 setCShadow('')
                 setHShadow('')
            }}>Play Again</button>
            
            <select name="options" style={{
                position:'absolute',
                fontSize: '30px',
                color: 'black',
                top: '230px',
                left: '105px',
                fontFamily: 'MV Boli',
                boxShadow: '-18px 15px 5px #555555',
                textShadow: '0px 1px 5px green'
            }} onChange = {handleSelection}>
                <option value="none"></option>
                <option value="rock">Pedra</option>
                <option value="paper">Papel</option>
                <option value="scissors">Tesoura</option>
            </select>
            <div style={{
                position:'absolute',
                fontSize: '60px',
                color: '#0ff',
                top: '400px',
                left: '400px',
                fontFamily: 'MV Boli',
            }}>{humanS}</div>

            <div style={{
                position:'absolute',
                fontSize: '60px',
                color: 'red',
                top: '400px',
                left: '870px',
                fontFamily: 'MV Boli',
            }}>{robotS}</div>

        </div>
    )
}

export default Rect
