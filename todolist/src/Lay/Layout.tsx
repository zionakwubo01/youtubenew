
import { Outlet } from 'react-router-dom'
import Header from '../components/static/Header'
import styled from 'styled-components'
import Sider from '../components/Sider'

const layout = () => {
  return (
    <div>
<Header/>
       <Main>
<Sider/>
<Hold>
  <Hom>
  <Outlet/>
  </Hom>
</Hold>
       </Main>

    </div>
  )
}

export default layout
const Hom = styled.div`
  width: calc(100% - 100px);
  display: flex;
  @media (max-width: 320px){
    width: 100%;
  }
`
const Hold = styled.div`
width: calc(100%);
display: flex;
justify-content: flex-end;


`
const Main = styled.div`
  width: 100%;
  display: flex;

`