import styled from "styled-components"
import img from "../assets/deepwater.jpg"
import vid from "../assets/webliumvideo.mp4"
import moment from "moment"
import {  useEffect, useState } from "react"



const Card = () => {
  
   
 const [state, setstate] = useState<any>({})

 useEffect(()=>{
     setstate(JSON.parse(localStorage.getItem("youtubevideos")!))
 },[])
console.log("state:" , state)

  return (
    <div>
   
      <Wrapper>
    {
      state?.items?.map((props: any)=>(
        <Container>
        <Image>
       
        <Picture src={props?.snippet.thumbnails.high.url ? 
        props?.snippet.thumbnails.high.url : img} alt="picture"/>
        <Video src={vid} autoPlay loop muted/> 
        
    {/* <Time>
    {moment(new Date().getTime()).format("LT")}
    </Time> */}
    
        </Image>
        <Content>
         <Avatar src={props?.snippet.thumbnails.high.url}/>
       <Texts>
       <ContentText>
       {props?.snippet.title}
       </ContentText>
       <SmallText>
      {props?.snippet.channelTitle}
       </SmallText>
       <Views>
    
    3k views &middot; {props?.snippet.publishTime}
       </Views>
       </Texts>
         <Dots></Dots>
        </Content>
    </Container>
     
      ))
    }
      </Wrapper>
    
    </div>
  )
}

export default Card
const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

const Views = styled.div`

`
const SmallText = styled.div`
font-size: 12px;
color: gray;
margin-bottom: 10px;

`
const Texts = styled.div`
flex: 1;
`
const Dots = styled.div`

`
const Avatar = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
border: 1px solid silver;
margin-left: 5px;
`
const ContentText = styled.div`
font-weight: 600;
font-size: 15px;
margin-bottom: 10px;
`
const Content = styled.div`
gap: 3px;
display: flex;
align-items: center;
flex-direction: row;
margin-bottom: 10px;
justify-content: space-between;
margin-top: 10px;
`
const Time = styled.div`
  padding: 2px 10px;
    position: absolute;
    color: white;
display: flex;
align-items: center;
justify-content: center;
    bottom: 5px;
    right: 0;
    background-color: black;
   
`
const Picture= styled.img`
    height: 100%;
    width: 100%;
    opacity: 0;
    &:hover{
      opacity: 1;
    }
  
`
const Video = styled.video`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: 0;
   
`

const Image = styled.div`
position: relative;
    height: 230px;
    width: 100%;
    background-color: aliceblue;
`
const  Container = styled.div`
    height: fit-content;
    width: 350px;
    background-color: white;
    border: 1px solid black;
`