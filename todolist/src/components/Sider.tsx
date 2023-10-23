import styled from "styled-components"
import {MdOutlineScreenshotMonitor} from "react-icons/md"
import {MdSubscriptions} from "react-icons/md"
import {MdOutlineVideoLibrary} from "react-icons/md"
import {AiFillHome} from "react-icons/ai"
import {FC} from "react"
interface iProps{
    ican: any
    text: any
}

const Nav:FC<iProps> =( {ican,text}) =>{
    return <Holder>
        <Icon>{ican}</Icon>
        <Text>{text}</Text>
    </Holder>
}

const Sider = () => {
  return (
    <div>
        <Container>
            <br/>
            <br/>
            <br/>
        <Nav text="Home"  ican={<AiFillHome/>}/>
        <Nav text="Shorts"  ican={<MdOutlineScreenshotMonitor/>}/>
        <Nav text="Subscriptions"  ican={<MdSubscriptions/>}/>
        <Nav text="Library"  ican={<MdOutlineVideoLibrary/>}/>
        </Container>
    </div>
  )

  
}

export default Sider
const Text = styled.div`
font-weight: bold;
`

const Icon = styled.div`
font-size: 30px;
`
const Holder = styled.div`
color: black;
height: 70px;
width: 100%;
/* background-color: red; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
&:hover{
    background-color: #d8c1c1;
    transition: all 350ms ease-in-out;
}
`
const Container = styled.div`
position: fixed;
width: 100px;
height: calc(100vh - 50px);
/* background-color: purple; */
display: flex;
gap: 20px;
flex-direction: column;
@media (max-width: 320px){
    /* background-color: greenyellow; */
    display: none;
}
`