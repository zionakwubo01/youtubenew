import styled from "styled-components"
import logo from "../../assets//download-removebg-preview.png"
import {AiOutlineMenu} from "react-icons/ai"
import {BsMicFill} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import {FiBell} from "react-icons/fi"
import {FiMoon} from "react-icons/fi"
import { useState } from "react"
import Sider from "../Sider"
// import NavFunction from "../../Card/NavFunction"

const Header = () => {
    const [state, setstate] = useState(false)

    const togleShow = ()=>{
        setstate(false)
    }
  return (
    <div>
        <Container>
            <Wrap>
<Left>
    <Home bg="" onClick={togleShow}>
       {
        state && <Sider/>
       }
<AiOutlineMenu/>
    </Home>
<Logo>
    <img src={logo}/>
</Logo>
</Left>
<InputHold>
<Input>
<input/>
<Search>
<AiOutlineSearch/>
</Search>
</Input>
<Home bg="">
<BsMicFill/>
    </Home>
</InputHold>
<Notification>
    <FiMoon/>
    <FiBell/>
    <Pro/>
</Notification>
            </Wrap>

        </Container>
    </div>
  )
}

export default Header
const Pro = styled.div`
    height: 40px;
    width: 40px;
    background-color: blue;
    border-radius: 50%;
`
const Notification = styled.div`
color: black;
display: flex;
align-items: center;
justify-content: center;
display: flex;
gap: 20px;
font-size: 20px;

`
const Search = styled.div`
    font-size: 25px;
    color: black;
    height: 93%;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
/* background-color: red; */
border-top-right-radius: 45px;
border-bottom-right-radius: 45px;
`
const Input = styled.div`
height: 85%;
width: 90%;
border-radius: 45px;
border: 1px solid silver;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
@media (max-width: 768px){
    display: none;

}
input{
    height: 93%;
    width: 90%;
    border-top-left-radius: 45px;
border-bottom-left-radius: 45px;
border: 0;
outline: 0;
}
`
const InputHold = styled.div`
height: 100%;
width: 630px;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
@media (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`
const Home = styled.div<{bg: string}>`
color: black;
font-size: 20px;
height: 40px;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
/* background-color: ${({bg})=> (bg ? "blue" : "transparent")}; */
border-radius: 50%;
&:hover{
    background-color: #e2dfdf;
    transition: all 450ms ease-in-out;
}
`
const Left = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Logo = styled.div`
height: 100%;
width: 150px;
display: flex;
align-items: center;
justify-content: center;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`


const Wrap = styled.div`
    height: 100%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
 @media (max-width: 768px){
    width: 98%;

 }
`
const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 60px;
background-color: white;
@media (max-width: 768px){
    width: 100%;
    
}
`