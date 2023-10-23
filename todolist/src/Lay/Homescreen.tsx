import styled from "styled-components"


import Card from "../Card/Card"
import { getVideos } from "../Api/Api"



const Homescreen = () => {
  return (
    <div>
<Container>

<Navhold>
      <Navi bg=""
   onClick={()=>(
    getVideos("All")
   )}
     
      >All</Navi>
      <Navi
     
      
      >News</Navi>
      <Navi>Debates</Navi>
      <Navi>music</Navi>
      <Navi>Live</Navi>
      <Navi>Comedy</Navi>
      <Navi>Public Speaking</Navi>
      <Navi>Nollywood</Navi>
      </Navhold>
  <br/>

<Card/>

</Container>
    </div>
  )
}

export default Homescreen


const Navhold = styled.div`
    /* margin-bottom: 10px; */
    display: flex;
    flex-direction: row;
    gap: 5px;
`
const Navi = styled.div<{bg?: string}>`
cursor: pointer;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
padding: 8px 10px;
background-color: ${({bg})=> (bg ? "orange" : "black")};
`
const Container = styled.div`
  width: calc(100%);
  height: 100vh;
  color: black;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  flex-direction: column;
`